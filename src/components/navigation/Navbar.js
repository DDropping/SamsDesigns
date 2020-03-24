import React, { useState } from "react"
import { Link } from "gatsby"
import { GiHamburgerMenu } from "react-icons/Gi"

import styles from "./styles/navbar.module.scss"

const Navbar = () => {
  const [isNavDrawer, toggleNavDrawer] = useState(false)

  const handleToggleNavDrawer = () => {
    toggleNavDrawer(!isNavDrawer)
  }

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        SamsDesigns
        <GiHamburgerMenu
          className={styles.menuIcon}
          onClick={() => handleToggleNavDrawer}
        />
      </div>
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
