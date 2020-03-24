import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import styles from "./productTemplate.module.scss"

const ProductTemplate = ({ data }) => {
  console.log(data)
  const {
    title,
    price,
    description: { description },
    images,
  } = data.product

  return (
    <Layout>
      <div>{"$" + price + " " + title}</div>
      <Image fluid={images[0].fluid} />
    </Layout>
  )
}

export const productQuery = graphql`
  query($contentful_id: String) {
    product: contentfulProduct(contentful_id: { eq: $contentful_id }) {
      title
      price
      description {
        description
      }
      isAvailable
      images {
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
`

export default ProductTemplate
