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
            title
            categories
          }
          tableOfContents
          html
        }
      }
    }
  `)

  const categories = {}
  const pageTemplate = path.resolve(`src/templates/page.js`)
  for (const page of result.data.pages.nodes) {
    const currentCategories = page.frontmatter.categories
      ? page.frontmatter.categories.split(", ")
      : []
    currentCategories.sort()

    for (const category of currentCategories) {
      if (!categories.hasOwnProperty(category)) {
        categories[category] = []
      }
      categories[category].push(page.parent.name)
    }

    createPage({
      path: page.parent.name == indexPage ? "/" : `/${page.parent.name}`,
      component: pageTemplate,
      context: {
        name: page.parent.name,
        title: page.frontmatter.title || page.parent.name,
        categories: currentCategories,
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

  const categoryTemplate = path.resolve(`src/templates/category.js`)
  for (const [category, pages] of Object.entries(categories)) {
    pages.sort()
    createPage({
      path: `/Category/${category}`,
      component: categoryTemplate,
      context: {
        name: category,
        pages: pages,
      },
    })
  }
}
