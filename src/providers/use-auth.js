import { createContext, useContext, useState } from 'react'
import { postData } from './fetch-request'
import {loginURL, signupURL} from './request-url'

export const AuthContext = createContext(null)
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const { user, setUser } = useContext(AuthContext)

  return {
    user,
    async attemptLogin(username, password) {
      const {status_code: statusCode} = await postData(loginURL, {username, password})

      if(statusCode === 200) {
        setUser({username})
      }
      else {
        throw new Error('Credentials mismatch...!')
      }
    },
    async attemptSignup(username, password) {
      const {status_code: statusCode, errors} = await postData(signupURL, {username, password})

      if(statusCode === 200) {
        setUser({username})
        return
      }
      if(statusCode === 409) {
        throw new Error('Signup infomation existed')
      }
      else {
        throw new Error(errors)
      }
    },
    async logout() {
      setUser(null)
    }
  }
}
