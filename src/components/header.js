import * as React from "react"
import { Link } from "gatsby"

import Navigation from "./navigation"

const Header = ({ page }) => (
  <header className="lg:w-1/5 px-4 py-6 lg:py-0">
    <h1>
      <Link to="/" className="block">
        <img
          alt="AlgoWiki"
          src="/logo.png"
          className="hidden lg:block max-h-40"
        />
        <img
          alt="AlgoWiki"
          src="/logo-horizontal.png"
          className="h-10 lg:hidden"
        />
      </Link>
    </h1>
    <Navigation page={page} />
  </header>
)

export default Header
