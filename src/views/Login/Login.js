import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { useAuth } from '../../providers/useAuth'
import './Login.css'

export function Login(props) {
  const { redirectTo = '/' } = props
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { attemptLogin } = useAuth()
  const navigate = useNavigate()

  const submitHandler = async e => {
    e.preventDefault()

    setError('')

    try {
      await attemptLogin(username, password)

      navigate(redirectTo, { replace: true })
    } catch (error) {
      setError(error.message)
    }
  }
  return (
    <div className='login'>
      <form onSubmit={submitHandler} className='login-form'>
        <div className='form-inner'>
          <h2>Login</h2>
          <div className='form-group'>
            <label htmlFor='name'>Name :</label>
            <input type='text' name='name' id='name' onChange={e => setUsername(e.target.value)} value={username} />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password :</label>
            <input type='password' name='password' id='password' onChange={e => setPassword(e.target.value)} value={password} />
          </div>
          {error && <div style={{ color: 'red' }}>{error}</div>}
          <button type='submit' className='submit'>Login</button>
        </div>
      </form>
    </div>
  )
}
