import React from "react"
import Image from "gatsby-image"

import styles from "./styles/navbar.module.scss"

const ItemPreview = ({ item, id }) => {
  const { title, price, onSale, color, size, images, quantity } = item
  const updatedPrice = onSale.isOnSale ? onSale.salePrice : price

  return (
    <div className={styles.previewItemContainer}>
      <Image className={styles.image} fluid={images[0].fluid} />
      <div className={styles.description}>
        <div>{item.title}</div>
        <div>{size + " | " + color}</div>
        <div>{"$" + updatedPrice}</div>
      </div>
    </div>
  )
}

export default ItemPreview
