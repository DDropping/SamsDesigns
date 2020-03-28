import React, { useContext } from "react"

import styles from "./checkout.module.scss"
import Layout from "../components/layout"
import CheckoutList from "../components/checkout/List"
import EmptyOptions from "../components/checkout/EmptyOptions"
import Summary from "../components/checkout/Summary"
import { GlobalStateContext } from "../context/GlobalContextProvider"

const Checkout = () => {
  const state = useContext(GlobalStateContext)

  return (
    <Layout>
      <div className={styles.cart}>
        <div className={styles.header}>
          {"My Cart: "}
          <span className={styles.itemCount}>
            {state.cart.length + " item(s)"}
          </span>
        </div>
        {state.cart.length === 0 && <EmptyOptions />}
        <CheckoutList />
      </div>
      <div className={styles.summary}>
        <div className={styles.header}>Order Summary:</div>
        <Summary />
      </div>
    </Layout>
  )
}

export default Checkout
