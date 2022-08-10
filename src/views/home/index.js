import { NavBar } from '../../components'
import React, { useEffect, useState, useContext } from 'react'
import { AuthContext } from '../../providers/use-auth'
import { Navigate } from 'react-router-dom'
import './home.css'
import { useInitDog } from '../../hooks';
import { usePreloadDog } from '../../hooks';

export const Home = () => {
  const { user } = useContext(AuthContext)
  const [left, setLeft] = useState(null)
  const [mid, setMid] = useState(null)
  const [right, setRight] = useState(null)
  const dogs = useInitDog()
  const [preloadDogs, setPreloadDogs] = usePreloadDog()
  const preLoadImg = new Image()

  useEffect(() => {
    if (!dogs.length) return

    setLeft(dogs[0])
    setMid(dogs[1])
    setRight(dogs[2])
  }, [dogs])

  useEffect(() => {
    preloadDogs.forEach(url => {
      preLoadImg.src = url
    })
  }, [preloadDogs, preLoadImg])

  const nextClickHandler = async () => {
    setRight(mid)
    setMid(left)
    setLeft(preloadDogs[preloadDogs.length - 1])
    setPreloadDogs((preloadDogs) => {
      preloadDogs.pop()
      return preloadDogs
    })
  }

  const previousClickHandler = async () => {
    setLeft(mid)
    setMid(right)
    setRight(preloadDogs[preloadDogs.length - 1])
    setPreloadDogs((preloadDogs) => {
      preloadDogs.pop()
      return preloadDogs
    })
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
