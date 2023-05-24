import { useContext } from "react"
import { Layout } from "../layout/Layout"
import { ShoppingCartContext } from "../context/ShoppingCartContext"
import { OrderCard } from "../components/OrderCard"
import { getTotal } from "../utils/getTotal"

export const Order = () => {
  const { cartProducts } = useContext(ShoppingCartContext)

  return (
    <Layout>
      <div className="flex flex-col items-center gap-6 w-4/5 h-[400px] p-2 shadow overflow-y-scroll">
        <h3 className="text-2xl font-semibold">Order</h3>
        {
          (cartProducts.length === 0)
          ? <div>No products in the cart</div>
          : cartProducts.map((product) => (
            <OrderCard key={product.id} product={product} />
          ))
        }
      </div>
      <div className="flex flex-col justify-center items-end w-4/5 h-20 px-16 shadow">
         <p className="text-xl font-semibold">Total: <span className="font-normal">${getTotal(cartProducts)}</span></p>
      </div>
    </Layout>
  )
}
