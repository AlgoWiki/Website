import * as React from "react"
import { Link } from "gatsby"

import Navigation from "./navigation"

const Header = ({ page }) => (
  <header>
    <Link to="/">
      <img alt="AlgoWiki" src="/logo.png" />
    </Link>
    <Navigation page={page} />
  </header>
)

export default Header
