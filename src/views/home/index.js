import { NavBar } from '../../components'
import React, { useEffect, useState, useContext } from 'react'
import { AuthContext } from '../../providers/use-auth'
import { useNavigate } from 'react-router'
import './home.css'

const getDog = async () => {
  return await fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
}

export const Home = () => {
  const { user } = useContext(AuthContext)
  const [left, setLeft] = useState(null)
  const [mid, setMid] = useState(null)
  const [right, setRight] = useState(null)
  const navigate = useNavigate()

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

  if (user) {
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

  navigate('/login', { replace: true })
}
