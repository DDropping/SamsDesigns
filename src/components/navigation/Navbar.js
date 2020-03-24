import React from "react"
import { Link } from "gatsby"

import styles from "./styles/navbar.module.scss"

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>SamsDesigns</div>
      <ul className={styles.menu}>
        <li>
          <Link to="/" className={styles.link}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/" className={styles.link}>
            Mens
          </Link>
        </li>
        <li>
          <Link to="/" className={styles.link}>
            Womens
          </Link>
        </li>
        <li>
          <Link to="/" className={styles.link}>
            Children
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
