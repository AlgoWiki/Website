import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Categories = ({ data }) => {
  const categories = [
    ...new Set(
      data.pages.categories.flatMap(categories => categories.split(", "))
    ),
  ]
  categories.sort()

  return (
    <Layout>
      <h1>Categories</h1>
      <ul>
        {categories.map(category => (
          <li key={category}>
            <Link to={`/Category/${category}`}>{category}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query Categories {
    pages: allMarkdownRemark {
      categories: distinct(field: { frontmatter: { categories: SELECT } })
    }
  }
`

export const Head = () => <Seo title="Categories" />

export default Categories
