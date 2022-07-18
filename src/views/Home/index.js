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
  const [ left, setLeft ] = useState('')
  const [ mid, setMid ] = useState('')
  const [ right, setRight ] = useState('')

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

  return (
    <div className='home'>
      <NavBar />
      <div className='main-pic-div'>
        <img className='left-pic' src={left} alt="red panda" />
        <img className='middle-pic' src={mid} alt="red panda" />
        <img className='right-pic' src={right} alt="red panda" />
      </div>
    </div>
  )
}
