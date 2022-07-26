import { NavBar } from '../../components'
import React, { useContext } from 'react'
import { AuthContext } from '../../providers/use-auth'
import { useNavigate } from 'react-router'

export const About = () => {
  const { user } = useContext(AuthContext)
  const navigate = useNavigate()
  
  if (user) {
    return (
      <div>
        <NavBar />
        <h4>
          About...!
        </h4>
      </div>
    )
  }

  navigate('/login', { replace: true })
}
