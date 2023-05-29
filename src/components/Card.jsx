import { useContext, useState } from "react"

import { ShoppingCartContext } from "../context/ShoppingCartContext"

export const Card = ({ category, title, price, images, description, id }) => {
  const { setShowDetail, setActiveProduct, cartProducts, setCartProducts } = useContext(ShoppingCartContext)
  const [isSelected, setIsSelected] = useState(false)

  const showProduct = () => {
    setShowDetail(true)
    setActiveProduct({
      category,
      description,
      id,
      images,
      price,
      title
    })
  }

  const handleAddToCart = () => {
    const product = cartProducts.find((product) => product.id === id)
    if (product) {
      return
    }
    setIsSelected(true)
    setCartProducts([...cartProducts, { category, description, id, title, price, images }])
  }

  const checkIfProductIsInCart = (id) => {
    const product = cartProducts.find((product) => product.id === id)
    if (product) {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 bg-white rounded-full">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
      )
    } else {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 bg-white/70 rounded-full">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      )
    }
  }

  return (
    <div
      className="cursor-pointer w-56 h-60 border bg-white rounded-lg"
      onClick={() => showProduct()}
    >
      <figure className="relative w-full h-4/5">
        <span className="absolute bottom-2 left-1 rounded-full px-2 py-1 text-xs bg-white/60">{category.name}</span>
        <img
          className="w-full object-cover h-full rounded-lg"
          src={images[0]} 
          alt="headphones"
        />
        <button 
          className="absolute top-2 right-1"
          type="button"
          onClick={() => handleAddToCart()}
          disabled={isSelected}
          >
          {checkIfProductIsInCart(id)}
        </button>
      </figure>
      <p className="flex justify-between px-2 items-center h-1/5 text-sm"> 
        <span className="overflow-hidden text-ellipsis">{title}</span>
        <span className="font-bold">${price}</span>
      </p>
    </div>
  )
}
