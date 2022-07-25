import { Link } from 'react-router-dom'
import './navbar.css'

export const NavBar = () => {
  return (
    <nav className='navbar'>
      <ul className='content'>
        <li>
          <Link to="/" className='react-link'>Home</Link>
        </li>
        <li>
          <Link to="/about" className='react-link'>About</Link>
        </li>
        <li>
          <Link to="/users" className='react-link'>Users</Link>
        </li>
      </ul>
    </nav>
  )
}
