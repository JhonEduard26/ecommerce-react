import { useContext, useState } from "react"

import { ShoppingCartContext } from "../context/ShoppingCartContext"

export const Card = ({ category, title, price, images, description, id }) => {
  const { count, setCount, setShowDetail, setActiveProduct, cartProducts, setCartProducts } = useContext(ShoppingCartContext)
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
    setCount(count + 1)
    setIsSelected(true)
    setCartProducts([...cartProducts, { category, description, id, title, price, images }])
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
          className="absolute top-2 right-1 flex justify-center items-center w-6 h-6 rounded-full bg-white/60 disabled:bg-white"
          type="button"
          onClick={() => handleAddToCart()}
          disabled={isSelected}
          >
          {isSelected ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          )}
        </button>
      </figure>
      <p className="flex justify-between px-2 items-center h-1/5 text-sm"> 
        <span>{title}</span>
        <span className="font-bold">${price}</span>
      </p>
    </div>
  )
}
