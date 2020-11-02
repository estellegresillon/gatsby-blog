import React from "react"
import { Link } from "gatsby"
import { FaMoon, FaSun } from "react-icons/fa"

import { rhythm, scale } from "../utils/typography"
import { useDarkMode } from "../utils/useDarkMode"

const Layout = props => {
  const { location, title, children } = props
  const [theme, toggleTheme] = useDarkMode()
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1),
          fontFamily: `Gilroy, sans-serif`,
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Gilroy, sans-serif`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }

  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header
        style={{
          display: "flex",
          margin: "2rem 0",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {header}
        <div
          className="icon-wrapper"
          style={{
            position: "relative",
            overflow: "hidden",
            height: "20px",
            width: "20px",
            marginBottom: "2.625rem",
            cursor: "pointer",
          }}
        >
          {theme === "light" ? (
            <FaMoon
              role="button"
              tabIndex={0}
              onKeyDown={toggleTheme}
              onClick={toggleTheme}
              id="moon-icon"
              style={{
                color: "#000",
                position: "absolute",
                top: "0px",
                right: "0px",
              }}
            />
          ) : (
            <FaSun
              role="button"
              tabIndex={0}
              onKeyDown={toggleTheme}
              onClick={toggleTheme}
              id="sun-icon"
              style={{
                color: "#fff",
                position: "absolute",
                top: "0px",
                right: "0px",
              }}
            />
          )}
        </div>
      </header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
