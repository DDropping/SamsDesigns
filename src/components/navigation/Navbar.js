import React, { useState } from "react"
import { Link } from "gatsby"
import { GiHamburgerMenu } from "react-icons/gi"
import { FaShoppingCart } from "react-icons/fa"
import navLinks from "../../constants/navLinks"

import styles from "./styles/navbar.module.scss"

const Navbar = () => {
  const [isNavDrawer, toggleNavDrawer] = useState(false)

  const handleToggleNavDrawer = () => {
    toggleNavDrawer(!isNavDrawer)
  }

  return (
    <div className={styles.container}>
      <GiHamburgerMenu
        className={styles.menuIcon}
        onClick={handleToggleNavDrawer}
      />
      <Link to="/">
        <FaShoppingCart className={styles.cartIcon} />
      </Link>
      <div className={styles.logo}>
        <Link to="/" className={styles.logoLink}>
          SamsDesigns
        </Link>
      </div>
      <ul className={isNavDrawer ? styles.menuDrawer : styles.menu}>
        {navLinks.map((link, index) => {
          return (
            <li key={index}>
              <Link to={link.path} className={styles.link}>
                {link.text}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Navbar
