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

  //getter need to be exact header row string
  rows.forEach(r => {
    let nodeData

    if (sheetName === "projects") {
      nodeData = {
        title: r["Project Title"],
        slug: slugify(r["Project Title"]),
        description: r.Description,
        blurb: r.Description ? r.Description.substr(0, 200) : "",
        coverUrl: r["Cover image"]
          ? `https://drive.google.com/thumbnail?${r['Cover image'].split("?")[1]}`
          : "",
        fileUrl: r['Results (master thesis etc)']
          ? `https://drive.google.com/uc?export=download&${
          r['Results (master thesis etc)'].split("?")[1]
          }`
          : "",
        start: r.Startdate
          ? `${r.Startdate.split("/")[2]}-${r.Startdate.split("/")[1]}-${
          r.Startdate.split("/")[0]
          }`
          : "",
        end: r.Enddate
          ? `${r.Enddate.split("/")[2]}-${r.Enddate.split("/")[1]}-${
          r.Enddate.split("/")[0]
          }`
          : "",
        author: r['Name of Project Lead'],
        category: r.Category,
        tags: r.tags ? r.tags.split(",") : [],
        organizations: r['Involved Organizations']
          ? r['Involved Organizations'].split(",")
          : [],
      }
    } else if (sheetName === "companies") {
      nodeData = {
        name: r.Name,
        slug: slugify(r.Name),
        type: r['partner type'],
        logoUrl: r.Logo
          ? `https://drive.google.com/thumbnail?${r.Logo.split("?")[1]}`
          : "",
        website: r.website,
      }
    } else if (sheetName === "studentpool") {
      nodeData = {
        title: r["Project Suggestion"],
        problem: r["Problem Statement"],
        category: r.Category,
        tags: r.Tags ? r.Tags.split(",") : [],
        person: r["Contact person"],
      }
    } else if (sheetName === "publications") {
      nodeData = {
        authors: r.Authors,
        year: r.Year,
        title: r.Title,
        journal: r.Journal ? r.Journal : "",
        doi: r.DOI ? r.DOI : "",
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
        email: r["Email Address"],
      }
     } else if (sheetName === "events") {
        nodeData = {
          picture: `https://drive.google.com/thumbnail?${
            r.picture.split("?")[1]
            }`,
          title: r.title,
          startDate: r.startDate,
          startTime: r.startTime,
          endDate: r.endDate,
          endTime: r.endTime,
          description: r.description,
          registration: r.registration,
        }
    } else {
      nodeData = r
    }
    createNode({
      ...nodeData,
      id: createNodeId(`${sheetName}-${r._rawData[0]}`),
      parent: "__SOURCE__",
      children: [],
      internal: {
        type: sheetName,
        content: JSON.stringify(nodeData),
        contentDigest: createContentDigest(nodeData),
      },
    }
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
  // old replace function .replace(/\\n/g, "\n")
  const credentials = {
    type: process.env.type,
    project_id: process.env.project_id,
    private_key_id: process.env.private_key_id,
    private_key: process.env.private_key.replace(new RegExp("\\\\n", "\g"), "\n"),
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
    sheetId: "1vwrRCdmYo9JICZiRewyM2EmxrLOgRG4srKLyRGbWCeQ",
    sheetName: "publications",
    credentials,
    createNodeId,
    createNode,
    createContentDigest,
  })
  await createNodesfromSheet({
    sheetId: "1O2Yhk_i6XCGZT6lvqzBcdMvgsLFMGNiQJPwj-BxHJhU",
    sheetName: "studentpool",
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
  await createNodesfromSheet({
    sheetId: "1B7qhF4Xxm6OiA-ug8fN72zSo7C_dCbR7rBhbJfxgKLw",
    sheetName: "events",
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
    type studentpool implements Node {
      supervisor: people @link(by: "fullname", from: "person")
    }
    type people implements Node {
      company: companies @link(by: "name", from: "organization") # foreign-key relation by custom field
    }
  `
  createTypes(typeDefs)
}
