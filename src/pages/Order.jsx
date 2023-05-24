import { useContext } from "react"
import { Layout } from "../layout/Layout"
import { ShoppingCartContext } from "../context/ShoppingCartContext"

export const Order = () => {
  const { cartProducts } = useContext(ShoppingCartContext)

  return (
    <Layout>
      <div className="flex flex-col items-center gap-6 w-4/5 h-[480px] p-2 shadow overflow-scroll">
        <h3>Order</h3>
        {
          cartProducts.map((product) => {
            return (
                <div 
                  key={product.id} 
                  className="flex justify-between items-center w-4/5 pb-4 border-b border-gray-300"
                >
                  <figure className="w-24 h-24">
                    <img className="w-full h-full object-cover rounded-md" src={product.images[0]} alt={product.title} />
                  </figure>
                  <div>
                    <div>{product.title}</div>
                    <div className="font-semibold">${product.price}</div>
                  </div>
                  <button className="">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
            )
          })
        }
      </div>
    </Layout>
  )
}
