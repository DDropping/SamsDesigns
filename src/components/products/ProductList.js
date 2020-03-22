import React from "react"
import Product from "./Product"

const ProductList = ({ products }) => {
  console.log(products)
  return (
    <div>
      {products.map(({ node }) => {
        return <Product key={node.id} product={node} />
      })}
    </div>
  )
}

export default ProductList
