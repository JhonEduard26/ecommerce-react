import { useState, createContext } from "react"

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
  const [count, setCount] = useState(0)
  const [showDetail, setShowDetail] = useState(false)
  const [activeProduct, setActiveProduct] = useState({
    category: {
      name: ''
    },
    id: null,
    images: [],
    price: 0,
    title: '',
  })
  const [cartProducts, setCartProducts] = useState([])
  const [orders, setOrders] = useState(localStorage.getItem('orders') ? JSON.parse(localStorage.getItem('orders')) : [])

  return (
    <ShoppingCartContext.Provider value={{
      count,
      setCount,
      showDetail,
      setShowDetail,
      activeProduct,
      setActiveProduct,
      cartProducts,
      setCartProducts,
      orders,
      setOrders,
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}
