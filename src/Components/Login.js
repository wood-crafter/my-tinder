import React, { useState } from 'react'
import '../CSS/Login.css'

function Login({ doLogin, error }) {
  const [details, setDetails] = useState({ name: "", password: "" })

  const submitHandler = e => {
    e.preventDefault()
    doLogin(details)
  }
  return (
    <div className='login'>
      <form onSubmit={submitHandler} className='login-form'>
        <div className='form-inner'>
          <h2>Login</h2>
          {(error == null) ? (
            <div></div>
          ) : (
            <div>{error.message}</div>
          )
          }
          <div className='form-group'>
            <label htmlFor='name'>Name:</label>
            <input type='text' name='name' id='name' onChange={e => setDetails({ ...details, name: e.target.value })} value={details.name} />
          </div>

          <div className='form-group'>
            <label htmlFor='password'>Password:</label>
            <input type='password' name='password' id='password' onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
          </div>

          <input type='submit' value='Login' />
        </div>
      </form>
    </div>
  )
}

export default Login