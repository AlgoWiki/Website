import * as React from "react"
import { useState } from "react"
import { Link } from "gatsby"

import Navigation from "./navigation"

const Header = ({ page }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
    return false
  }
  return (
    <header className="lg:w-1/5 px-4 py-6 lg:py-0 border-b-2 border-gray-100 lg:border-b-0">
      <div className="flex justify-between">
        <h1>
          <Link to="/" className="block lg:mt-8">
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
        <div className="lg:hidden">
          <button
            className="navbar-burger flex items-center text-slate-800 p-3"
            onClick={toggleMenu}
          >
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
      </div>
      <Navigation page={page} menuOpen={menuOpen} />
    </header>
  )
}

export default Header
