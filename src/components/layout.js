/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

const Layout = ({ children, page, title }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div className="container max-w-5xl mx-auto flex flex-col lg:flex-row">
        <Header
          siteTitle={data.site.siteMetadata?.title || `Title`}
          page={page}
        />
        <div className="lg:w-4/5 px-4 py-6 lg:py-0">
          <main>
            {title && <h1>{title}</h1>}
            {children}
          </main>
        </div>
      </div>

      <footer className="container mx-auto py-6 px-4 text-center">
        © {new Date().getFullYear()} &middot; Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </>
  )
}

export default Layout
