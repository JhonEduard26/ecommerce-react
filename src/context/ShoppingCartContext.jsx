import { createContext, useState, useEffect } from "react"

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
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
  const [items, setItems] = useState([])
  const [cartProducts, setCartProducts] = useState([])
  const [orders, setOrders] = useState(localStorage.getItem('orders') ? JSON.parse(localStorage.getItem('orders')) : [])

  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products?offset=0&limit=20`)
      .then((response) => response.json())
      .then((data) => setItems(data))
  }, [])

  return (
    <ShoppingCartContext.Provider value={{
      showDetail,
      setShowDetail,
      activeProduct,
      setActiveProduct,
      cartProducts,
      setCartProducts,
      orders,
      setOrders,
      items,
      setItems
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}
