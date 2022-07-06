import './App.css';
import React, { useState } from 'react';

function App() {
  const [user, setUser] = useState({name: "", password: ""})

  const doLogin = details => {
    // do login here
  }

  const doLogout = () => {
    console.info("Logged out")
  }

  return (
    <div className="App">
    </div>
  );
}

export default App;
