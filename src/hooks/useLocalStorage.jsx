import { useEffect, useState } from "react"

const ITEM_NAME = 'orders'

export const useLocalStorage = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const localStorageItem = localStorage.getItem(ITEM_NAME)
    let parsedItem

    if (!localStorageItem) {
      localStorage.setItem(ITEM_NAME, JSON.stringify([]))
      parsedItem = []
    } else {
      parsedItem = JSON.parse(localStorageItem)
    }

    setData(parsedItem)
  }, [])

  const saveData = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem)
    localStorage.setItem(ITEM_NAME, stringifiedItem)
    setData(newItem)
  }

  return [data, saveData]
}