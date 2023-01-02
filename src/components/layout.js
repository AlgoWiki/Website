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
          <main className="lg:mt-16">
            {title && <h1 className="text-3xl font-bold mb-8">{title}</h1>}
            {children}
          </main>
        </div>
      </div>

      <footer className="container mx-auto mt-5 py-6 px-4 text-center text-gray-500">
        <a href="https://github.com/AlgoWiki" className="text-gray-500">
          AlgoWiki
        </a>
        <a href="https://creativecommons.org/licenses/by-sa/4.0/">
          <img
            className="h-3.5 -mt-1 px-2 inline"
            src="https://mirrors.creativecommons.org/presskit/buttons/80x15/png/by-sa.png"
            alt="CC-BY-SA 4.0"
            // style="height:14px;margin-bottom:-2px;"
          />
        </a>
        <span className="px-1">|</span> fork us on{" "}
        <a href="https://github.com/AlgoWiki/Website" className="text-gray-500">
          GitHub
        </a>
      </footer>
    </>
  )
}

export default Layout
