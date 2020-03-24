import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"

import styles from "./product.module.scss"

const Product = ({ product }) => {
  const { contentful_id, title, price, images } = product
  const mainImage = images[0].fluid

  return (
    <div className={styles.productContainer}>
      <Link className={styles.link} to={`/products/${contentful_id}`}>
        <Image fluid={mainImage} alt={title} />
        <div className={styles.productContent}>
          ${price + " "}
          {title}
        </div>
      </Link>
    </div>
  )
}

export default Product
