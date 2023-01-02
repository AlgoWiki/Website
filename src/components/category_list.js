import * as React from "react"
import { Link } from "gatsby"

const CategoryList = ({ categories }) => (
  <ul>
    {categories.map(category => (
      <li key={category}>
        <Link to={`/Category/${category}`}>{category}</Link>
      </li>
    ))}
  </ul>
)

export default CategoryList
