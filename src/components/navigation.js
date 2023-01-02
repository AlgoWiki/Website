import * as React from "react"
import { Link } from "gatsby"

const Entry = ({ to, children }) => (
  <li className="">
    <Link to={to} className="block pt-1 lg:py-1">
      {children}
    </Link>
  </li>
)

const Navigation = ({ page }) => (
  <nav>
    <ul className="mt-3 lg:mt-4">
      <Entry to="/">Front page</Entry>
      <Entry to="/All pages">All pages</Entry>
      <Entry to="/Categories">Categories</Entry>
      <Entry to="/Help">Help</Entry>
    </ul>

    {page && (
      <>
        <h2 className="mt-4 lg:mt-6 text-gray-500">This page</h2>
        <hr />
        <ul className="mt-1 lg:mt-2">
          <Entry
            to={`https://github.com/AlgoWiki/AlgoWiki/edit/main/wiki/${page.name}.md`}
          >
            Edit
          </Entry>
          <Entry
            to={`https://github.com/AlgoWiki/AlgoWiki/commits/main/wiki/${page.name}.md`}
          >
            See history
          </Entry>
          <Entry
            to={`https://raw.githubusercontent.com/AlgoWiki/AlgoWiki/main/wiki/${page.name}.md`}
          >
            See raw source
          </Entry>
          <Entry
            to={`https://github.com/AlgoWiki/AlgoWiki/blob/main/wiki/${page.name}.md`}
          >
            View on GitHub
          </Entry>
        </ul>
      </>
    )}
  </nav>
)

export default Navigation
