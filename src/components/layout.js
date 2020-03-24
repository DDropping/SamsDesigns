import React from "react"
import PropTypes from "prop-types"

import "./layout.scss"
import Navbar from "../components/navigation/Navbar"
import Footer from "../components/footer"

const Layout = ({ children }) => {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <Navbar />
      <main
        style={{
          margin: "0 auto",
          maxWidth: "1200",
          padding: "0 1.0875rem 1.45rem",
          paddingBottom: "100px",
        }}
      >
        {children}
      </main>
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
