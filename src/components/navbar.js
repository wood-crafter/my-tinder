import { NavLink } from 'react-router-dom'
import './navbar.css'

export const NavBar = () => {
  return (
    <nav className='navbar'>
      <ul className='content'>
        <li>
          <NavLink to="/" className='react-link'>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" className='react-link'>About</NavLink>
        </li>
        <li>
          <NavLink to="/users" className='react-link'>Users</NavLink>
        </li>
      </ul>
    </nav>
  )
}
