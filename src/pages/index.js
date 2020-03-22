import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import ProductList from "../components/products/ProductList"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ProductList />
  </Layout>
)

export default IndexPage
