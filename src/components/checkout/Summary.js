import React, { useContext } from "react"
import { loadStripe } from "@stripe/stripe-js"

import styles from "./checkout.module.scss"
import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../../context/GlobalContextProvider"

const Summary = () => {
  const state = useContext(GlobalStateContext)
  const stripePromise = loadStripe("pk_test_uXHacdHV1RXAHbZjZH4kQe8300gConxOLu")

  const redirectToCheckout = async (event, sku, quantity = 1) => {
    event.preventDefault()
    const stripe = await stripePromise
    const { error } = await stripe.redirectToCheckout({
      items: [{ sku, quantity }],
      successUrl: `${window.location.origin}/`,
      cancelUrl: `${window.location.origin}/`,
    })
    if (error) {
      console.warn("Error:", error)
    }
  }

  var skuData = []
  state.cart.map(item => {
    skuData.push({ sku: item.sku })
  })

  console.log(skuData)

  return (
    <div className={styles.summary}>
      Subtotal:
      <button onClick={event => redirectToCheckout(event, state.cart)}>
        Checkout
      </button>
    </div>
  )
}

export default Summary
