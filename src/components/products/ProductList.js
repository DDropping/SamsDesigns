import React from "react"
import Product from "./Product"

const ProductList = ({ products }) => {
  console.log(products)
  return (
    <div>
      <Product />
    </div>
  )
}

export default ProductList
