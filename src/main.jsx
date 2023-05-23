import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import router from './router/root.jsx'
import './index.css'
import { ShoppingCartProvider } from './context/ShoppingCartContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <ShoppingCartProvider>
      <RouterProvider router={router} />
    </ShoppingCartProvider>
)
