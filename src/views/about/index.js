import { NavBar } from '../../components'
import React, { useContext } from 'react'
import { AuthContext } from '../../providers/use-auth'
import { Navigate } from "react-router-dom";

export const About = () => {
  const { user } = useContext(AuthContext)

  if (!user) return <Navigate to="/login" />

  return (
    <div>
      <NavBar />
      <h4>
        About...!
      </h4>
    </div>
  )

}
