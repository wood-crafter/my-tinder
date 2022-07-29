import { NavBar } from '../../components'
import React, { useEffect, useState, useContext } from 'react'
import { AuthContext } from '../../providers/use-auth'
import { Navigate } from "react-router-dom";
import './home.css'
import { getDog } from '../../utils/fetch-request';

export const Home = () => {
  const { user } = useContext(AuthContext)
  const [left, setLeft] = useState(null)
  const [mid, setMid] = useState(null)
  const [right, setRight] = useState(null)
  const [randomDog1, setRandomDog1] = useState(null)
  const [randomDog2, setRandomDog2] = useState(null)

  useEffect(() => {
    Promise.all([getDog(), getDog(), getDog(), getDog(), getDog()])
      .then(dogs => {
        const [leftDog, midDog, rightDog, randomDog1, randomDog2] = dogs.map(dog => dog.message)

        setLeft(leftDog)
        setMid(midDog)
        setRight(rightDog)
        setRandomDog1(randomDog1)
        setRandomDog2(randomDog2)
      })
  }, [])

  const nextClickHandler = async () => {
    setRight(mid)
    setMid(left)
    setLeft(randomDog1)
    setRandomDog1(randomDog2)
    const nextRandomDog = await getDog()
    setRandomDog2(nextRandomDog.message)
  }

  const previousClickHandler = async () => {
    setLeft(mid)
    setMid(right)
    setRight(randomDog1)
    setRandomDog1(randomDog2)
    const nextRandomDog = await getDog()
    setRandomDog2(nextRandomDog.message)
  }

  if (!user) return <Navigate to="/login" />

  return (
    <div className='home'>
      <NavBar />
      <img className='random-image' src={randomDog1 ?? ''} alt=''></img>
      <img className='random-image' src={randomDog2 ?? ''} alt=''></img>
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
