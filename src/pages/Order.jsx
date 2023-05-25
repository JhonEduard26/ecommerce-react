import { useContext } from "react"
import { Layout } from "../layout/Layout"
import { ShoppingCartContext } from "../context/ShoppingCartContext"
import { OrderCard } from "../components/OrderCard"
import { getTotal } from "../utils/getTotal"

export const Order = () => {
  const { cartProducts, setCartProducts, orders, setOrders } = useContext(ShoppingCartContext)

  const isCartEmpty = cartProducts.length === 0

  const handleCheckout = () => {
    const orderToAdd = {
      id: Date.now(),
      products: cartProducts,
      totalProducts: cartProducts.length,
      total: getTotal(cartProducts),
      date: new Date().toLocaleDateString(),
    }
    setOrders([...orders, orderToAdd])
    setCartProducts([])
  }


  return (
    <Layout>
      <div className="flex flex-col items-center gap-6 w-4/5 h-[400px] p-2 shadow overflow-y-scroll">
        <h3 className="text-2xl font-semibold">Order</h3>
        {
          (isCartEmpty)
          ? <div>No products in the cart</div>
          : cartProducts.map((product) => (
            <OrderCard key={product.id} product={product} />
          ))
        }
      </div>
      <div className="flex justify-evenly  items-center w-4/5 h-28 px-16 shadow">
        <button
          className="w-48 p-2 rounded-lg text-xl bg-black text-white disabled:bg-gray-500"
          onClick={handleCheckout}
          disabled={isCartEmpty}
        >Checkout</button>
        <p className="text-xl font-semibold">Total: <span className="font-normal">${getTotal(cartProducts)}</span></p>
      </div>
    </Layout>
  )
}
