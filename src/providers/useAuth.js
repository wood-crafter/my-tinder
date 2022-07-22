import { createContext, useContext, useState } from 'react'
import { postData } from './fetchRequest'

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
      const {status_code} = await postData('https://alpha-sneu.xyz/api/v1/users/signin', {username, password})

      if(status_code === 200) {
        setUser({username})
      }
      else {
        throw new Error('Credentials mismatch...!')
      }
    },
    async logout() {
      setUser(null)
    }
  }
}
