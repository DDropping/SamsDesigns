import React from "react"
import Product from "./Product"

const ProductList = ({ products }) => {
  return (
    <div>
      {products.map(({ node }) => {
        return <Product key={node.contentful_id} product={node} />
      })}
    </div>
  )
}

export default ProductList
