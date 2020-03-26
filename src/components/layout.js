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
        THIS IS NOT A REAL WEBSITE, NO PURCHASES WILL BE ALLOWED
      </div>
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
