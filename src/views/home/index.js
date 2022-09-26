import { NavBar } from '../../components'
import React, { useContext } from 'react'

import { DogPics } from '../../components/dog-pics'
import { AuthContext } from '../../providers/use-auth'
import { Navigate } from 'react-router-dom'

import './home.css'

export const Home = () => {
  const { user } = useContext(AuthContext)

  // FIXME: This guard return could be turned in to a `hook`, or a `HoC`...!
  if (!user) return <Navigate to="/login" />

  return (
    <div className='home' tabIndex={0} >
      <NavBar />
      <DogPics />
    </div>
  )
}
