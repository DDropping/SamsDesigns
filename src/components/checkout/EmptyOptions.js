import React from "react"
import { Link } from "gatsby"

import styles from "./checkout.module.scss"

const EmptyOptions = () => {
  return (
    <div className={styles.emptyOptions}>
      Your cart is currently empty.
      <div>
        <Link>
          <button>New Arrivals</button>
        </Link>
        <Link>
          <button>On Sale!</button>
        </Link>
      </div>
    </div>
  )
}

export default EmptyOptions
