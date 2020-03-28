import React, { useContext } from "react"
import { loadStripe } from "@stripe/stripe-js"

import styles from "./checkout.module.scss"
import { GlobalStateContext } from "../../context/GlobalContextProvider"

const Summary = () => {
  const state = useContext(GlobalStateContext)
  const stripePromise = loadStripe("pk_test_uXHacdHV1RXAHbZjZH4kQe8300gConxOLu")

  const redirectToCheckout = async (event, sku, quantity = 1) => {
    event.preventDefault()
    const stripe = await stripePromise
    const { error } = await stripe.redirectToCheckout({
      items: sku,
      successUrl: `${window.location.origin}/`,
      cancelUrl: `${window.location.origin}/`,
    })
    if (error) {
      console.warn("Error:", error)
    }
  }

  var skuData = []
  state.cart.map(item => {
    skuData.push({ sku: item.sku, quantity: item.quantity })
  })

  console.log(skuData)

  var subTotal = 0
  state.cart.map(item => {
    return (subTotal =
      subTotal + (item.onSale.isOnSale ? item.onSale.salePrice : item.price))
  })

  console.log(skuData)

  return (
    <div className={styles.summary}>
      <div>
        <span>SubTotal:</span>
        <span style={{ float: "right" }}>{"$" + subTotal.toFixed(2)}</span>
      </div>
      <div>
        <span>Tax:</span>
        <span style={{ float: "right" }}>
          {"$" + (subTotal * 0.0725).toFixed(2)}
        </span>
      </div>
      <div style={{ borderTop: "1px solid grey" }}>
        <span>Total:</span>
        <span style={{ float: "right" }}>
          {"$" + (subTotal * 1.0725).toFixed(2)}
        </span>
      </div>
      <button
        className={styles.checkoutButton}
        onClick={event => redirectToCheckout(event, skuData)}
      >
        Checkout
      </button>
    </div>
  )
}

export default Summary
