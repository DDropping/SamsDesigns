import React from "react"
import PropTypes from "prop-types"

import "./layout.scss"
import Navbar from "../components/navigation/Navbar"

const Layout = ({ children }) => {
  return (
    <>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1200,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <Navbar />
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
