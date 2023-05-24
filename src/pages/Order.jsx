import { useContext } from "react"
import { Layout } from "../layout/Layout"
import { ShoppingCartContext } from "../context/ShoppingCartContext"
import { OrderCard } from "../components/OrderCard"

export const Order = () => {
  const { cartProducts } = useContext(ShoppingCartContext)

  return (
    <Layout>
      <div className="flex flex-col items-center gap-6 w-4/5 h-[480px] p-2 shadow overflow-y-scroll">
        <h3>Order</h3>
        {
          (cartProducts.length === 0)
          ? <div>No products in the cart</div>
          : cartProducts.map((product) => (
            <OrderCard key={product.id} product={product} />
          ))
        }
      </div>
    </Layout>
  )
}
