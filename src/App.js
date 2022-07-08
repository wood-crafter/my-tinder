import './App.css';
import React, { useState } from 'react';
import Login from './Componants/Login';

function App() {
  const users = [
    {
      name: 'hungpv',
      password: '123'
    }
  ]
  const [user, setUser] = useState({name: ''})
  const [error, setError] = useState({message: null})

  const doLogin = details => {
    // do login here
    console.info(details)

    if(details.name === users[0].name && details.password === users[0].password) {
      console.info('Logged in')
      setUser({name: details.name})
    } else {
      setError({message: 'details not match'})
    }
  }

  const doLogout = () => {
    console.info("Logged out")
  }

  return (
    <div className="App">
      {(user.name !== "") ? (
        <div>Welcome</div>
      ) :
      <Login doLogin={doLogin} error={error}></Login>
    }
    </div>
  );
}

export default App;
