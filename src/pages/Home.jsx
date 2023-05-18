import { useState } from "react"
import { Card } from "../components/Card"
import { Layout } from "../layout/Layout"
import { useEffect } from "react"

export const Home = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products?offset=0&limit=20`)
      .then((response) => response.json())
      .then((data) => setData(data))
  }, [])
  

  return (
    <Layout>
      <div className="grid grid-cols-3 gap-4 w-full max-w-screen-md">
        {
          data.map(card => (
            <Card key={card.id} {...card} />
          ))
        }
      </div>
    </Layout>
  )
}
