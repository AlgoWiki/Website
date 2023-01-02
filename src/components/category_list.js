import * as React from "react"
import { Link } from "gatsby"

const CategoryList = ({ categories }) => (
  <ul className="-mt-6 mb-6 flex">
    {categories.map(category => (
      <li key={category} className="border-l first:border-l-0 first:-ml-2">
        <Link
          className="block px-2 text-sm text-gray-500"
          to={`/Category/${category}`}
        >
          {category}
        </Link>
      </li>
    ))}
  </ul>
)

export default CategoryList
