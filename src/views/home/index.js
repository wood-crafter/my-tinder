import { NavBar } from '../../components'
import React, { useEffect, useState, useContext } from 'react'
import { AuthContext } from '../../providers/use-auth'
import { Navigate } from 'react-router-dom'
import './home.css'
import { getDog } from '../../utils/fetch-request'
import { useInitDog } from '../../hooks'

export const Home = () => {
  const { user } = useContext(AuthContext)
  const [left, setLeft] = useState(null)
  const [mid, setMid] = useState(null)
  const [right, setRight] = useState(null)
  const dogs = useInitDog()

  useEffect(() => {
    if (!dogs.length) return

    setLeft(dogs[0])
    setMid(dogs[1])
    setRight(dogs[2])
  }, [dogs])

  const nextClickHandler = async () => {
    setRight(mid)
    setMid(left)
    const nextLeft = await getDog()
    setLeft(nextLeft.message)
  }

  const previousClickHandler = async () => {
    setLeft(mid)
    setMid(right)
    const nextRight = await getDog()
    setRight(nextRight.message)
  }

  const handleArrowKeyDown = async (e) => {
    if (e.keyCode === 37) {
      await previousClickHandler()
    }

    if (e.keyCode === 39) {
      await nextClickHandler()
    }
  }

  if (!user) return <Navigate to="/login" />

  return (
    <div className='home' onKeyDown={handleArrowKeyDown} tabIndex={0} >
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
