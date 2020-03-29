import React, { useState, useContext } from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import { FaShoppingCart, FaCheck } from "react-icons/fa"

import Layout from "../components/layout"
import styles from "./productTemplate.module.scss"
import colors from "../constants/colors"
import sizes from "../constants/sizes"
import {
  GlobalStateContext,
  GlobalDispatchContext,
} from "../context/GlobalContextProvider"

const ProductTemplate = ({ data }) => {
  const [selectedColor, setColor] = useState("White")
  const [selectedSize, setSize] = useState("Medium")
  const dispatch = useContext(GlobalDispatchContext)
  const state = useContext(GlobalStateContext)

  const {
    sku,
    title,
    price,
    description,
    images,
    isNewArrival,
    onSale,
  } = data.product

  return (
    <Layout>
      <div className={styles.imageContainer}>
        <Image className={styles.image} fluid={images[0].fluid} />
        <div className={styles.imageList}>
          <div className={styles.imageListItem}>
            <Image className={styles.image} fluid={images[0].fluid} />
          </div>
        </div>
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
          {sizes.map((size, index) => {
            return (
              <div
                key={index}
                className={
                  selectedSize === size ? styles.activeSize : styles.size
                }
                role="button"
                tabIndex={0}
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
          {colors.map((color, index) => {
            return (
              <div key={index} className={styles.colorBoxContainer}>
                <div
                  className={
                    selectedColor === color
                      ? styles.activeColorBox
                      : styles.colorBox
                  }
                  style={{ backgroundColor: color }}
                  role="button"
                  tabIndex={0}
                  onClick={() => setColor(color)}
                />
              </div>
            )
          })}
        </div>
        {!state.isCartPreview && (
          <div
            className={styles.addToCartButton}
            role="button"
            tabIndex={0}
            onClick={() => {
              dispatch({
                type: "ADD_ITEM",
                payload: {
                  sku: sku,
                  quantity: 1,
                  title: title,
                  price: price,
                  onSale: onSale,
                  color: selectedColor,
                  size: selectedSize,
                  images: images,
                },
              })
              dispatch({ type: "TOGGLE_CART_PREVIEW", payload: true })
            }}
          >
            <div className={styles.addToCartIcon}>
              <FaShoppingCart />
            </div>
            <div className={styles.addToCartDivider} />
            <div className={styles.addToCartText}>Add to Cart</div>
          </div>
        )}
        {state.isCartPreview && (
          <div className={styles.addToCartButton}>
            <div className={styles.addToCartIcon}>
              <FaCheck />
            </div>
            <div className={styles.addToCartDivider} />
            <div className={styles.addToCartText}>Added to Cart!</div>
          </div>
        )}

        <div className={styles.description}>{description.description}</div>
      </div>
    </Layout>
  )
}

export const productQuery = graphql`
  query($contentful_id: String) {
    product: contentfulProduct(contentful_id: { eq: $contentful_id }) {
      sku
      title
      price
      description {
        description
      }
      isAvailable
      isNewArrival
      onSale {
        isOnSale
        salePrice
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
