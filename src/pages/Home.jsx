import { useContext, useState } from "react"

import { Card } from "../components/Card"
import { Layout } from "../layout/Layout"
import { ProductDetail } from "../components/ProductDetail"
import { ShoppingCartContext } from "../context/ShoppingCartContext"

export const Home = () => {
  const [searchByTitle, setSearchByTitle] = useState('')
  const [filteredItems, setFilteredItems] = useState([])
  const { items } = useContext(ShoppingCartContext)

  const handleFilteredItems = (event) => {
    const wordToSearch = event.target.value.trim().toLowerCase()
    setSearchByTitle(wordToSearch)
    
    const itemsFiltered = items.filter(item => item.title.toLowerCase().includes(wordToSearch))
    setFilteredItems(itemsFiltered)
  }

  return (
    <Layout>
      <div>
        <h1 className="text-2xl font-semibold mb-4 text-center">Exclusive Products</h1>
        <input 
          className="mb-8 p-4 rounded-md border-2"
          type="text"
          placeholder="Search a product"
          onChange={handleFilteredItems}
        />
      </div>
      <div className="grid grid-cols-3 gap-4 w-full max-w-screen-md">
        {
          searchByTitle.length === 0 
          ? items.map(card => <Card key={card.id} {...card} />)
          : filteredItems.map(card => <Card key={card.id} {...card} />)
        } 
      </div>
      <ProductDetail />
    </Layout>
  )
}
