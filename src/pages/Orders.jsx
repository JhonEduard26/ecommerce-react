import { useContext } from "react"

import { Layout } from "../layout/Layout"
import { ShoppingCartContext } from "../context/ShoppingCartContext"

export const Orders = () => {
  const { orders } = useContext(ShoppingCartContext)
  
  return (
    <Layout>
      <h2 className="mb-4 text-2xl font-semibold">Orders</h2>
      {
        orders.map((order) => {
          return (
            <div key={order.id} className="flex justify-evenly items-center w-1/2 h-20 mb-4 border-2 border-black rounded-lg text-xl">
                <div>Total: <span className="font-semibold">${order.total}</span></div>
              <div>{order.date}</div>
              <div>Products: {order.products.length}</div>
            </div>
          )
        })
      }
    </Layout>
  )
}
