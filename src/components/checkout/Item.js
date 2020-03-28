import React from "react"
import Image from "gatsby-image"

import styles from "./checkout.module.scss"

const Item = ({ item }) => {
  const { title, price, onSale, color, size, images, quantity } = item

  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image className={styles.image} fluid={images[0].fluid} />
      </div>
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        {onSale.isOnSale ? (
          <div>
            <span className={styles.oldPrice}>${price + " "}</span>
            <span className={styles.salePrice}>{"$" + onSale.salePrice}</span>
            <div className={styles.discount}>
              {Math.round(100 - (onSale.salePrice / price) * 100) +
                "% off - Limited Time"}
            </div>
          </div>
        ) : (
          <div>{"$" + price}</div>
        )}
        <div className={styles.colorSizeQuantity}>
          <div>{"Color: " + color}</div>
          <div>{"Size: " + size}</div>
          <div>{"Quantity: " + quantity}</div>
        </div>
      </div>
      <div className={styles.remove}>
        <div className={styles.option}>Delete</div>
        <div className={styles.option}>Edit</div>
      </div>
    </div>
  )
}

export default Item
