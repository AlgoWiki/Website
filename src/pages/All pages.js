import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const AllPages = ({ data }) => (
  <Layout title="All pages">
    <ul>
      {data.pages.nodes.map(page => (
        <li key={page.parent.name}>
          <Link to={`/${page.parent.name}`}>{page.parent.name}</Link>
        </li>
      ))}
    </ul>
  </Layout>
)

export const query = graphql`
  query Pages {
    pages: allMarkdownRemark {
      nodes {
        parent {
          ... on File {
            name
          }
        }
      }
    }
  }
`

export const Head = () => <Seo title="All pages" />

export default AllPages
