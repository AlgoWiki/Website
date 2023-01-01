import * as React from "react"

import Layout from "../components/layout"

const Page = ({ pageContext }) => {
  const { title, categories, tableOfContents, html } = pageContext
  return (
    <Layout>
      <h1>{title}</h1>
      <ul>
        {categories.map(category => (
          <li key={category}>{category}</li>
        ))}
      </ul>
      {tableOfContents && (
        <div dangerouslySetInnerHTML={{ __html: tableOfContents }}></div>
      )}
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </Layout>
  )
}

export default Page
