import React from "react"
import PropTypes from "prop-types"

import "./layout.scss"
import Navbar from "../components/navigation/Navbar"
import Footer from "../components/footer"

const Layout = ({ children }) => {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <Navbar />
      <main className="layoutMainContent">{children}</main>
      <div style={{ position: "absolute", bottom: 0 }}>
        <Footer />
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
