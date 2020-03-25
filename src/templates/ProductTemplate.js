import React, { useState } from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import styles from "./productTemplate.module.scss"
import colors from "../constants/colors"
import sizes from "../constants/sizes"

const ProductTemplate = ({ data }) => {
  const [selectedColor, setColor] = useState("White")
  const [selectedSize, setSize] = useState("Medium")

  const {
    title,
    price,
    // description: { description },
    images,
    isNewArrival,
    onSale,
  } = data.product

  return (
    <Layout>
      <div className={styles.imageContainer}>
        <Image className={styles.image} fluid={images[0].fluid} />
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.title}>{title}</div>
        <span className={onSale.isOnSale ? styles.oldPrice : styles.price}>
          {"$" + price}
        </span>
        {onSale.isOnSale && (
          <span>
            <span className={styles.salePrice}>
              {" $" + onSale.salePrice + " "}
            </span>
            <span className={styles.saleDiscout}>
              {" " +
                Math.round(100 - (onSale.salePrice / price) * 100) +
                "% off"}
            </span>
          </span>
        )}
        {isNewArrival && <div className={styles.newArrival}>New Arrival</div>}

        <div className={styles.sizes}>
          <div>
            Size:
            <i>{" " + selectedSize}</i>
          </div>
          {sizes.map(size => {
            return (
              <div
                className={
                  selectedSize === size ? styles.activeSize : styles.size
                }
                key={size}
                onClick={() => setSize(size)}
              >
                {size}
              </div>
            )
          })}
        </div>
        <div className={styles.colors}>
          <div>
            Color:
            <i>{" " + selectedColor}</i>
          </div>
          {colors.map(color => {
            return (
              <div className={styles.colorBoxContainer}>
                <div
                  key={color}
                  className={
                    selectedColor === color
                      ? styles.activeColorBox
                      : styles.colorBox
                  }
                  style={{ backgroundColor: color }}
                  onClick={() => setColor(color)}
                />
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export const productQuery = graphql`
  query($contentful_id: String) {
    product: contentfulProduct(contentful_id: { eq: $contentful_id }) {
      title
      price
      isAvailable
      isNewArrival
      onSale {
        isOnSale
        salePrice
      }
      description {
        description
      }
      images {
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
`

export default ProductTemplate
