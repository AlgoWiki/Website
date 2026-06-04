import * as React from "react"

import CategoryList from "../components/category_list"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Page = ({ pageContext }) => {
  const { name, title, categories, html } = pageContext
  return (
    <Layout title={title} page={{ name }}>
      <CategoryList categories={categories} />
      <div className="prose" dangerouslySetInnerHTML={{ __html: html }}></div>
    </Layout>
  )
}

export const Head = ({ pageContext }) => (
  <>
    <Seo title={pageContext.title} />
  </>
)

export default Page
