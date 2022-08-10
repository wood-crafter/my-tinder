import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { Input } from '../../components'
import { useAuth } from '../../providers/use-auth'
import './login.css'

export const Login = (props) => {
  const { redirectTo = '/' } = props
  const [username, setUsername] = useState('')
  const [isLoginShow, setIsLoginShow] = useState(true)
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const { attemptLogin, attemptSignup } = useAuth()
  const navigate = useNavigate()

  const signinHandler = async e => {
    e.preventDefault()

    setError('')

    try {
      await attemptLogin(username, password)

      navigate(redirectTo, { replace: true })
    } catch (error) {
      setError(error.message)
    }
  }

  const signupHandler = async e => {
    e.preventDefault()

    if (password !== confirmPassword) {
      setError('Confirm password not match')
      return
    }

    setError('')

    try {
      await attemptSignup(username, password)

      navigate(redirectTo, { replace: true })
    } catch (error) {
      setError(error.message)
    }
  }

  const changeFormShowingHandler = async e => {
    setError('')
    setIsLoginShow(!isLoginShow)
  }
  return (
    <div className='login'>
      <form onSubmit={signinHandler} className={`login-form ${isLoginShow ? 'showing' : 'not-showing'}`}>
        <div className='form-inner'>
          <h2>Finder</h2>
          <div className='form-group'>
            <Input type='text' name='signinName' id='signin-name' onChange={e => setUsername(e.target.value)} value={username} placeholder='Name' />
          </div>
          <div className='form-group'>
            <Input type='password' name='signinPassword' id='signin-password' onChange={e => setPassword(e.target.value)} value={password} placeholder='Password' />
          </div>
          <div style={{ display: error ? 'block' : 'hidden' }} className='login-error' >{error}</div>
          <div className='submit-div'><button type='submit' className='submit'>Login</button></div>
          <div className='extra-action'>
            <div>Forgot password</div>
            <button className='signup' onClick={changeFormShowingHandler} type='button'>Signup</button>
          </div>
        </div>
      </form>

      <form onSubmit={signupHandler} className={`signup-form ${isLoginShow ? 'not-showing' : 'showing'}`}>
        <div className='form-inner'>
          <h2>Finder</h2>
          <div className='form-group'>
            <Input type='text' name='signupName' id='signup-name' onChange={e => setUsername(e.target.value)} value={username} placeholder='Name' />
          </div>
          <div className='form-group'>
            <Input type='password' name='signupPassword' id='signup-password' onChange={e => setPassword(e.target.value)} value={password} placeholder='Password' />
          </div>
          <div className='form-group'>
            <Input type='password' name='confirmPassword' id='confirm_password' onChange={e => setConfirmPassword(e.target.value)} value={confirmPassword} placeholder='Confirm Password' />
          </div>
          <div style={{ display: error ? 'block' : 'hidden' }} className='login-error' >{error}</div>
          <div className='submit-div'><button type='submit' className='submit'>Signup</button></div>
          <div className='extra-action'>
            <div>Already have account?</div>
            <button className='signup' onClick={changeFormShowingHandler} type='button'>Login</button>
          </div>
        </div>
      </form>
    </div>
  )
}
