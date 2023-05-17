import { createBrowserRouter } from 'react-router-dom'
import { Account, Home, Login, NotFound, Order, Orders } from '../pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/order',
    element: <Order />
  },
  {
    path: '/orders',
    element: <Orders />
  },
  {
    path: '/account',
    element: <Account />
  },
  {
    path: '*',
    element: <NotFound />
  }
])

export default router