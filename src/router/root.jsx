import { createBrowserRouter } from 'react-router-dom'
import { Account, Home, Login, NotFound, Order, Orders } from '../pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/all',
        element: <Home />
      },
      {
        path: '/clothes',
        element: <Home />
      },
      {
        path: '/electronics',
        element: <Home />
      },
      {
        path: '/furniture',
        element: <Home />
      },
      {
        path: '/toys',
        element: <Home />
      },
    ]
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