import React, { useState, useContext } from "react"
import { Link } from "gatsby"
import { GiHamburgerMenu } from "react-icons/gi"
import { FaShoppingCart } from "react-icons/fa"
import navLinks from "../../constants/navLinks"

import styles from "./styles/navbar.module.scss"
import { GlobalStateContext } from "../../context/GlobalContextProvider"

const Navbar = () => {
  const state = useContext(GlobalStateContext)
  const [isNavDrawer, toggleNavDrawer] = useState(false)

  const handleToggleNavDrawer = () => {
    toggleNavDrawer(!isNavDrawer)
  }

  console.log(state.cart.length)
  var cartItems = state.cart.length

  return (
    <div className={styles.container}>
      <GiHamburgerMenu
        className={styles.menuIcon}
        onClick={handleToggleNavDrawer}
      />
      <Link to="/mycart">
        <div className={styles.cartIcon}>
          {state.cart.length !== 0 && (
            <span className={styles.itemCount}>{state.cart.length}</span>
          )}
          <FaShoppingCart />
        </div>
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
