import { NavBar } from '../../components'
import React, { useEffect, useState } from 'react'
// import { useAuth } from '../../providers/useAuth'
import './Home.css'

const getDog = async () => {
  return await fetch('https://dog.ceo/api/breeds/image/random')
  .then(response => response.json())
}

export const Home = () => {
  // const { user } = useAuth()
  const [ left, setLeft ] = useState(null)
  const [ mid, setMid ] = useState(null)
  const [ right, setRight ] = useState(null)

  useEffect(() => {
    getDog().then((dog) => {
      setLeft(dog.message)
    })
  }, [])

  useEffect(() => {
    getDog().then((dog) => {
      setMid(dog.message)
    })
  }, [])

  useEffect(() => {
    getDog().then((dog) => {
      setRight(dog.message)
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
