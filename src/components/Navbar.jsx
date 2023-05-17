import { NavLink } from 'react-router-dom'
const activeStyle = 'underline underline-offset-4'

export const Navbar = () => {
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
        <li>
          🛒
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
