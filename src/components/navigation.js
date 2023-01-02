import * as React from "react"
import { Link } from "gatsby"

const Navigation = ({ page }) => (
  <nav>
    <ul>
      <li>
        <Link to="/">Front page</Link>
      </li>
      <li>
        <Link to="/All pages">All pages</Link>
      </li>
      <li>
        <Link to="/Categories">Categories</Link>
      </li>
      <li>
        <Link to="/Help">Help</Link>
      </li>
    </ul>

    {page && (
      <>
        <h2>This page</h2>
        <ul>
          <li>
            <Link
              to={`https://github.com/AlgoWiki/AlgoWiki/edit/main/wiki/${page.name}.md`}
            >
              Edit
            </Link>
          </li>
          <li>
            <Link
              to={`https://github.com/AlgoWiki/AlgoWiki/commits/main/wiki/${page.name}.md`}
            >
              See history
            </Link>
          </li>
          <li>
            <Link
              to={`https://raw.githubusercontent.com/AlgoWiki/AlgoWiki/main/wiki/${page.name}.md`}
            >
              See raw source
            </Link>
          </li>
          <li>
            <Link
              to={`https://github.com/AlgoWiki/AlgoWiki/blob/main/wiki/${page.name}.md`}
            >
              View on GitHub
            </Link>
          </li>
        </ul>
      </>
    )}
  </nav>
)

export default Navigation
