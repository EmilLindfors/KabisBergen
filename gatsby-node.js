require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
require("moment/locale/nb")
const path = require(`path`)
const fetchSheet = require(`./fetch-sheet.js`).default

const createNodesfromSheet = async ({
  sheetId,
  sheetName,
  credentials,
  createNodeId,
  createNode,
  createContentDigest,
}) => {
  let rows = await fetchSheet(sheetId, sheetName, credentials)
  const slugify = str => {
    const slug = str
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "")
    return `${slug}`.replace(/\/\/+/g, "/")
  }

  rows.forEach(r => {
    let nodeData

    if (sheetName === "projects") {
      nodeData = {
        title: r.projecttitle,
        slug: slugify(r.projecttitle),
        description: r.description,
        blurb: r.description ? r.description.substr(0, 200) : "",
        coverUrl: r.coverimage
          ? `https://drive.google.com/thumbnail?${r.coverimage.split("?")[1]}`
          : "",
        fileUrl: r.resultsmasterthesisetc
          ? `https://drive.google.com/uc?export=download&${
              r.resultsmasterthesisetc.split("?")[1]
            }`
          : "",
        start: r.startdate
          ? `${r.startdate.split("/")[2]}-${r.startdate.split("/")[1]}-${
              r.startdate.split("/")[0]
            }`
          : "",
        end: r.enddate
          ? `${r.enddate.split("/")[2]}-${r.enddate.split("/")[1]}-${
              r.enddate.split("/")[0]
            }`
          : "",
        author: r.nameofprojectlead,
        category: r.category,
        tags: r.tags ? r.tags.split(",") : [],
        organizations: r.involvedorganizations
          ? r.involvedorganizations.split(",")
          : [],
      }
    } else if (sheetName === "companies") {
      nodeData = {
        name: r.name,
        slug: slugify(r.name),
        type: r.partnertype,
        logoUrl: r.logo
          ? `https://drive.google.com/thumbnail?${r.logo.split("?")[1]}`
          : "",
        website: r.website,
      }
    } else if (sheetName === "people") {
      nodeData = {
        avatarUrl: `https://drive.google.com/thumbnail?${
          r.avatar.split("?")[1]
        }`,
        fullname: r.fullname,
        organization: r.organization,
        type: r.partnertype,
        kabisrole: r.kabisrole,
        orgrole: r.orgrole,
        etternavn: r.etternavn,
        linkedin: r.linkedin,
      }
    } else {
      nodeData = r
    }

    //TODO: fix hardcoded timezone difference
    createNode(
      Object.assign(nodeData, {
        id: createNodeId(`${sheetName}-${r.id}`),
        parent: "__SOURCE__",
        children: [],
        internal: {
          type: sheetName,
          content: JSON.stringify(r),
          contentDigest: createContentDigest(r),
        },
      })
    )
  })
}

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const { createNode } = actions

  // remember to use replace on private key!
  const credentials = {
    type: process.env.type,
    project_id: process.env.project_id,
    private_key_id: process.env.private_key_id,
    private_key: process.env.private_key.replace(/\\n/g, "\n"),
    client_email: process.env.client_email,
    client_id: process.env.client_id,
    auth_uri: process.env.auth_uri,
    token_uri: process.env.token_uri,
    auth_provider_x509_cert_url: process.env.auth_provider_x509_cert_url,
    client_x509_cert_url: process.env.client_x509_cert_url,
  }

  await createNodesfromSheet({
    sheetId: "1ZM4fzS5ggnv7eed21i40mDkOD-dwOPCDO6FfZY9JEn8",
    sheetName: "projects",
    credentials,
    createNodeId,
    createNode,
    createContentDigest,
  })
  await createNodesfromSheet({
    sheetId: "1ALmxQIDDC8GKxkx0sIuoGCkI_N0xHgJ8GkCYMOGfhrY",
    sheetName: "companies",
    credentials,
    createNodeId,
    createNode,
    createContentDigest,
  })
  await createNodesfromSheet({
    sheetId: "1PKxuE9HGlnWXZfEsnL-DUdfUpmhHSn9u2XV1lhlDn3E",
    sheetName: "people",
    credentials,
    createNodeId,
    createNode,
    createContentDigest,
  })
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      projects: allProjects {
        edges {
          node {
            slug
            id
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    //create project page
    result.data.projects.edges.forEach(({ node }) => {
      const id = node.id
      const eventPath = `/projects/${node.slug}/`

      createPage({
        path: eventPath,
        component: path.resolve(`src/templates/project.js`),
        context: {
          itemId: id,
        },
      })
    })
  })
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type projects implements Node {
      projectPerson: people @link(by: "fullname", from: "author")
    }
    type people implements Node {
      company: companies @link(by: "name", from: "organization") # foreign-key relation by custom field
    }
  `
  createTypes(typeDefs)
}
