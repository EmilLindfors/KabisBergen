/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const { createRemoteFileNode } = require("gatsby-source-filesystem")
const path = require(`path`)

const slugify = str => {
  const slug = str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "")
  return `${slug}`.replace(/\/\/+/g, "/")
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allGoogleSheetProjectsRow {
        edges {
          node {
            id
            description
            category
            projecttitle
            nameofprojectlead
            involvedorganizations
            tags
            startdate
            enddate
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const items = result.data.allGoogleSheetProjectsRow.edges

    items.forEach(edge => {
      const id = edge.node.id
      const name = edge.node.projecttitle
      const eventPath = `/project/${slugify(name)}/`

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

exports.createResolvers = ({
  actions,
  cache,
  createNodeId,
  createResolvers,
  store,
  reporter,
}) => {
  const { createNode } = actions

  createResolvers({
    googleSheetPeopleRow: {
      avatarUrl: {
        resolve: source =>
          `https://drive.google.com/uc?export=view&${
            source.avatar.split("?")[1]
          }`,
      },
    },
    googleSheetCompaniesRow: {
      logoUrl: {
        resolve: source =>
          `https://drive.google.com/uc?export=view&${
            source.logo.split("?")[1]
          }`,
      },
    },
    googleSheetProjectsRow: {
      coverUrl: {
        resolve: source =>
          source.cover
            ? `https://drive.google.com/uc?export=view&${
                source.cover.split("?")[1]
              }`
            : "",
      },
    },
  })
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type googleSheetPeopleRow implements Node {
      avatarUrl: String
      company: googleSheetCompaniesRow @link(by: "name", from: "organization") # foreign-key relation by custom field
    }
    type googleSheetCompaniesRow implements Node {
      logoUrl: String
    }
    type googleSheetProjectsRow implements Node {
      coverUrl: String
      projectPerson: googleSheetPeopleRow @link(by: "fullname", from: "nameofprojectlead")
    }
  
  `
  createTypes(typeDefs)
}
