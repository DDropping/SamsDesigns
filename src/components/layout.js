import React from "react"
import PropTypes from "prop-types"

import "./layout.scss"
import Navbar from "../components/navigation/Navbar"
import Footer from "../components/footer"

const Layout = ({ children }) => {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <div
        style={{
          width: "100vw",
          backgroundColor: "red",
          color: "white",
          textAlign: "center",
        }}
      >
        THIS WEBSITE IS IN DEVELOPMENT, PURCHASING HAS BEEN DISABLED.
      </div>
      <Navbar />
      <main className="layoutMainContent">{children}</main>
      <div className="layoutMainFooter">
        <Footer />
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
