import React from "react"
import PropTypes from "prop-types"

import "./layout.scss"
import Navbar from "../components/navigation/Navbar"
import Footer from "../components/footer"

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div
        style={{
          margin: "0 auto",
          maxWidth: "1200",
          minHeight: "calc(100vh - 300px)",
          padding: "0 1.0875rem 1.45rem",
        }}
      >
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
