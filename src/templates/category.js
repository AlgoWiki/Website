import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Category = ({ pageContext }) => {
  const { name, pages } = pageContext
  return (
    <Layout title={`Category: ${name}`}>
      <ul>
        {pages.map(page => (
          <li key={page}>
            <Link to={`/${page}`}>{page}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export const Head = ({ pageContext }) => (
  <Seo title={"Category: " + pageContext.name} />
)

export default Category
