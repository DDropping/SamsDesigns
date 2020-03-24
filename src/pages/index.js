import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProductList from "../components/products/ProductList"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <ProductList products={data.products.edges} />
    </Layout>
  )
}

export const getProducts = graphql`
  query {
    products: allContentfulProduct {
      edges {
        node {
          title
          price
          contentful_id
          images {
            fluid {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`

export default IndexPage
