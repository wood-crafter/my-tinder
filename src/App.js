import './App.css';
import React from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import { Login, Home } from './views';

function App() {
  // const users = [
  //   {
  //     name: 'hungpv',
  //     password: '123'
  //   }
  // ]
  // const [user, setUser] = useState({ name: '' })
  // const [error, setError] = useState({ message: null })

  // const doLogin = details => {
  //   // do login here
  //   console.info(details)

  //   if (details.name === users[0].name && details.password === users[0].password) {
  //     setUser({ name: details.name })
  //   } else {
  //     setError({ message: 'details not match' })
  //   }
  // }

  // const doLogout = () => {
  //   console.info("Logged out")
  // }

  return (
    <Router>
      <div>
        <nav>
          <ul>
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
        <Routes>
          <Route path="/about" element={'/about'} />
          <Route path="/users" element={'/users'} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
