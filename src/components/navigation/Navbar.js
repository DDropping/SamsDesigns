import React, { useState } from "react"
import { Link } from "gatsby"
import { GiHamburgerMenu } from "react-icons/Gi"
import { FaRegWindowClose, FaShoppingCart } from "react-icons/Fa"
import navLinks from "../../constants/links"

import styles from "./styles/navbar.module.scss"

const Navbar = () => {
  const [isNavDrawer, toggleNavDrawer] = useState(false)

  const handleToggleNavDrawer = () => {
    toggleNavDrawer(!isNavDrawer)
  }

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <GiHamburgerMenu
          className={styles.menuIcon}
          onClick={handleToggleNavDrawer}
        />
        SamsDesigns
        <Link to="/cart">
          <FaShoppingCart className={styles.cartIcon} />
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
