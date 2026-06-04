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
        plugins: [
          {
            // Parse $…$ / $$…$$ into math nodes (via remark-math) and render
            // them with KaTeX at build time. Parsing math before Markdown's
            // backslash-escaping is what keeps LaTeX like \{ \} \\ intact.
            resolve: `gatsby-remark-katex`,
            options: {
              // Never fail the build on a bad formula; render it in red instead.
              throwOnError: false,
              errorColor: `#cc0000`,
              strict: `ignore`,
            },
          },
          `gatsby-remark-wiki-link`,
        ],
      },
    },
    `gatsby-plugin-postcss`,
  ],
  trailingSlash: "never",
}
