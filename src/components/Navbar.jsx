import { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

import { ShoppingCartContext } from '../context/ShoppingCartContext'
const activeStyle = 'underline underline-offset-4'

export const Navbar = () => {
  const { cartProducts } = useContext(ShoppingCartContext)
  const navigate = useNavigate()

  return (
    <nav className='flex justify-between h-14 px-12 py-4 font-light shadow-md'>
      <ul className='flex gap-4 items-center'>
        <li className='font-semibold text-lg'> 
          <NavLink to='/'>
            Shopi
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/all'
            className={({ isActive }) =>
             isActive ? activeStyle : ""
            }
          >
            All            
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/clothes'
            className={({ isActive }) =>
              isActive ? activeStyle : ""
            }
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/electronics'
            className={({ isActive }) =>
              isActive ? activeStyle : ""
            }
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/furniture'
            className={({ isActive }) =>
              isActive ? activeStyle : ""
            }
          >
            Furniture
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/toys'
            className={({ isActive }) =>
              isActive ? activeStyle : ""
           }
          >
            Toys
          </NavLink> 
        </li>
      </ul>
      <ul className='flex gap-4'>
        <li className='text-gray-600'>
          jhon@jhon.com
        </li>
        <li>
          <NavLink to='/account'
            className={({ isActive }) =>
              isActive ? activeStyle : ""
           }
          >
            My acccount
          </NavLink>
        </li>
        <li>
          <NavLink to='/orders'
            className={({ isActive }) =>
              isActive ? activeStyle : ""
           }
          >
            My orders
          </NavLink>
        </li>
        <li className='cursor-pointer' onClick={() => navigate('/order')}>
          <div className='flex items-center gap-1'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
            <span>{ cartProducts.length }</span>
          </div>
        </li>
        <li>
          <NavLink to='/login'
            className={({ isActive }) =>
              isActive ? activeStyle : ""
           }
          >
            Login
          </NavLink>
        </li>
      </ul> 
    </nav>
  )
}
