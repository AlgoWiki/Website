import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Page = ({ pageContext }) => {
  const { title, categories, html } = pageContext
  return (
    <Layout>
      <h1>{title}</h1>
      <ul>
        {categories.map(category => (
          <li key={category}>
            <Link to={`/Category/${category}`}>{category}</Link>
          </li>
        ))}
      </ul>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </Layout>
  )
}

export const Head = ({ pageContext }) => (
  <>
    <Seo title={pageContext.title} />
    <script>
      {`
        MathJax = {
            tex: {
                inlineMath: [['$', '$']]
            },
            svg: {
                fontCache: 'global'
            }
        };
      `}
    </script>
    <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
    <script
      id="MathJax-script"
      async
      src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"
    ></script>
  </>
)

export default Page
