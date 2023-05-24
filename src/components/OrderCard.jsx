import { useContext } from "react"
import { ShoppingCartContext } from "../context/ShoppingCartContext"

export const OrderCard = (props) => {
  const { cartProducts, setCartProducts } = useContext(ShoppingCartContext)
  const {
    id,
    images,
    price,
    title,
  } = props.product

  const handleRemove = () => {
    setCartProducts(cartProducts.filter((product) => product.id !== id))
  }

  return (
    <div
      className="grid gap-x-4 items-center justify-items-end w-4/5 pb-4 border-b border-gray-300"
      style={{gridTemplateColumns: 'auto auto 1fr'}}
    >
      <figure className="w-24 h-24">
        <img className="w-full h-full object-cover rounded-md" src={images[0]} alt={title} />
      </figure>
      <div>
        <div>{title}</div>
        <div className="font-semibold">${price}</div>
      </div>
      <button onClick={handleRemove}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  )
}
