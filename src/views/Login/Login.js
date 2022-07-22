import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { Input } from '../../components'
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
          <h2>Finder</h2>
          <div className='form-group'>
            <Input type='text' name='name' id='name' onChange={e => setUsername(e.target.value)} value={username} placeholder='Name' />
          </div>
          <div className='form-group'>
            <Input type='password' name='password' id='password' onChange={e => setPassword(e.target.value)} value={password} placeholder='Password' />
          </div>
          <div style={{ display: error ? 'block' : 'hidden' }} className='login-error' >{error}</div>
          <div className='submit-div'><button type='submit' className='submit'>Login</button></div>
          <div className='extra-action'>
            <div>Forgot password</div>
            <button className='signup'>Signup</button>
          </div>
        </div>
      </form>
    </div>
  )
}
