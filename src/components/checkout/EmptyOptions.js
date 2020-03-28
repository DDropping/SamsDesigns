import React from "react"

import styles from "./checkout.module.scss"

const EmptyOptions = () => {
  return (
    <div className={styles.emptyOptions}>
      Your cart is currently empty.
      <div>
        <button>New Arrivals</button>
        <button>On Sale!</button>
      </div>
    </div>
  )
}

export default EmptyOptions
