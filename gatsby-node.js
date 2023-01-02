const path = require("path")

const indexPage = "AlgoWiki"

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ actions, graphql }) => {
  const { createPage, createRedirect } = actions
  const result = await graphql(`
    query Pages {
      pages: allMarkdownRemark {
        nodes {
          parent {
            ... on File {
              name
            }
          }
          frontmatter {
            categories
          }
          tableOfContents
          html
        }
      }
    }
  `)

  const pageTemplate = path.resolve(`src/templates/page.js`)
  for (const page of result.data.pages.nodes) {
    createPage({
      path: page.parent.name == indexPage ? "/" : `/${page.parent.name}`,
      component: pageTemplate,
      context: {
        title: page.parent.name,
        categories: page.frontmatter.categories
          ? page.frontmatter.categories.split(", ")
          : [],
        tableOfContents: page.tableOfContents,
        html: page.html,
      },
    })
  }

  createRedirect({
    fromPath: `/${indexPage}`,
    toPath: `/`,
    redirectInBrowser: true,
  })
}
