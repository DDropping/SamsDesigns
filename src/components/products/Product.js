import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"

import styles from "./product.module.scss"

const Product = ({ product }) => {
  const { contentful_id, title, price, images, isNewArrival, onSale } = product
  const mainImage = images[0].fluid

  return (
    <div className={styles.productContainer}>
      <Link className={styles.link} to={`/products/${contentful_id}`}>
        <Image fluid={mainImage} alt={title} />
        <div className={styles.productContent}>
          <span
            className={onSale.isOnSale ? styles.salePrice : styles.normalPrice}
          >
            {"$" + price}
          </span>
          <span className={styles.title}>{" " + title}</span>
          {onSale.isOnSale && (
            <div className={styles.onSale}>
              {"$" + onSale.salePrice + " On Sale"}
            </div>
          )}
          {isNewArrival && <div className={styles.newArrival}>New Arrival</div>}
        </div>
      </Link>
    </div>
  )
}

export default Product
