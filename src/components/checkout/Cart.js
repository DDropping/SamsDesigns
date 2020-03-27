import React from "react"
import { loadStripe } from "@stripe/stripe-js"

const stripe = await loadStripe("pk_test_uXHacdHV1RXAHbZjZH4kQe8300gConxOLu")

const Cart = () => {
  return (
    <div>
      <div>cart</div>
    </div>
  )
}

export default Cart
