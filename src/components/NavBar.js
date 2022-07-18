import { Link } from 'react-router-dom'
import './NavBar.css'

export const NavBar = () => {
  return (
    <nav className='navbar'>
      <ul className='content'>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>
    </nav>
  )
}
