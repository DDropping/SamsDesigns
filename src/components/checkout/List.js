import React, { useContext } from "react"
import { GlobalStateContext } from "../../context/GlobalContextProvider"

import Item from "./Item"

const List = () => {
  const state = useContext(GlobalStateContext)

  return (
    <div>
      {state.cart.map((item, index) => {
        return <Item item={item} key={index} />
      })}
    </div>
  )
}

export default List
