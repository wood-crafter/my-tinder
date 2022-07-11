import { createContext, useContext, useState } from 'react'

const users = [
  {
    username: 'hungpv',
    password: '123'
  }
]

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
    async attemptLogin (username, password) {
      // TODO: Auth API here
      const matchUser = users
        .find(user => user.username === username && user.password === password)

      if (matchUser) {
        setUser(matchUser)
      } else {
        throw new Error('Credentials mismatch...!')
      }
    },
    async logout () {
      setUser(null)
    }
  }
}
