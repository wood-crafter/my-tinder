import { NavBar } from '../../components'
import React, { useEffect, useState, useContext } from 'react'
import { AuthContext } from '../../providers/use-auth'
import { Navigate } from "react-router-dom";
import './home.css'
import { getDog } from '../../providers/fetch-request';

export const Home = () => {
  const { user } = useContext(AuthContext)
  const [left, setLeft] = useState(null)
  const [mid, setMid] = useState(null)
  const [right, setRight] = useState(null)

  useEffect(() => {
    Promise.all([getDog(), getDog(), getDog()])
      .then(dogs => {
        const [leftDog, midDog, rightDog] = dogs.map(dog => dog.message)
  
        setLeft(leftDog)
        setMid(midDog)
        setRight(rightDog)
      })
  }, [])

  const nextClickHandler = async () => {
    const nextLeft = await getDog()
    setRight(mid)
    setMid(left)
    setLeft(nextLeft.message)
  }

  const previousClickHandler = async () => {
    const nextRight = await getDog()
    setLeft(mid)
    setMid(right)
    setRight(nextRight.message)
  }

  if (!user) return <Navigate to="/login" />

  return (
    <div className='home'>
      <NavBar />
      <div className='main-pic-div'>
        <img className='left-pic' src={left ?? './demo-main-pic.jpg'} alt='' />
        <button onClick={previousClickHandler} className='previous' >&#8249;</button>
        <img className='middle-pic' src={mid ?? './demo-main-pic.jpg'} alt='' />
        <button onClick={nextClickHandler} className='next' >&#8250;</button>
        <img className='right-pic' src={right ?? './demo-main-pic.jpg'} alt='' />
      </div>
    </div>
  )

}
