import React, { useContext } from "react"
import { loadStripe } from "@stripe/stripe-js"

import Layout from "../components/layout"
import CheckoutList from "../components/checkout/List"
import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../context/GlobalContextProvider"

const Checkout = () => {
  const dispatch = useContext(GlobalDispatchContext)
  const state = useContext(GlobalStateContext)
  console.log(state)
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

  return (
    <Layout>
      <div>checkout</div>
      <CheckoutList />
      <button onClick={event => redirectToCheckout(event, state.cart)}>
        Checkout
      </button>
    </Layout>
  )
}

export default Checkout
