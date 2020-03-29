import React, { useState, useContext } from "react"
import { Link } from "gatsby"
import { FaShoppingCart } from "react-icons/fa"
import { MdClose } from "react-icons/md"

import styles from "./styles/navbar.module.scss"
import {
  GlobalStateContext,
  GlobalDispatchContext,
} from "../../context/GlobalContextProvider"
import ItemPreview from "./ItemPreview"

const CartIcon = () => {
  const state = useContext(GlobalStateContext)
  const dispatch = useContext(GlobalDispatchContext)

  return (
    <div className={styles.cart}>
      <Link to="/mycart">
        <div className={styles.cartIcon}>
          {state.cart.length !== 0 && (
            <span className={styles.itemCount}>{state.cart.length}</span>
          )}
          <FaShoppingCart />
        </div>
      </Link>
      {state.isCartPreview && (
        <div className={styles.cartPreview}>
          <MdClose
            className={styles.closeButton}
            onClick={() =>
              dispatch({ type: "TOGGLE_CART_PREVIEW", payload: false })
            }
          />
          <div className={styles.previewTitle}>
            <span>My Cart: </span>
            <span className={styles.itemCount}>
              {state.cart.length + " item(s)"}
            </span>
          </div>
          <div>
            {state.cart.map((item, index) => {
              return <ItemPreview item={item} key={index} id={index} />
            })}
          </div>
          <Link to="/mycart">
            <button
              className={styles.checkoutButton}
              onClick={() =>
                dispatch({ type: "TOGGLE_CART_PREVIEW", payload: false })
              }
            >
              Checkout
            </button>
          </Link>
        </div>
      )}
    </div>
  )
}

export default CartIcon
