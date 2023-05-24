import { useContext } from "react"
import { ShoppingCartContext } from "../context/ShoppingCartContext"


export const ProductDetail = () => {
  const { showDetail, setShowDetail, activeProduct } = useContext(ShoppingCartContext)

  const { description, title, images, price } = Boolean(activeProduct) && activeProduct
  
  return (
    <aside 
      style={{display: !showDetail ? 'none' : 'flex'}}
      className="flex-col w-64 h-5/6 fixed right-0 p-4 rounded-md border border-black"
    >
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold">Detail</h2>
        <button className="hover:scale-125" onClick={() => setShowDetail(false)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div>
        <figure className="mb-2">
          <img className="w-full h-full mt-4 rounded-md" src={images[0]} alt={title} />
        </figure>
        <p className="font-semibold text-xl">${price}</p>
        <h3>{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </aside>
  )
}
