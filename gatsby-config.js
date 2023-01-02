/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `AlgoWiki`,
    description: `AlgoWiki, a wiki dedicated to competitive programming.`,
    author: `AlgoWiki`,
    siteUrl: `https://wiki.algo.is`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `wiki`,
        path: `${__dirname}/content/wiki/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // Footnotes mode (default: true)
        footnotes: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [`gatsby-remark-wiki-link`],
      },
    },
  ],
  trailingSlash: "never",
}
