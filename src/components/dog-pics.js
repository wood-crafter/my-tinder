import React, { useEffect, useState } from 'react'
import { useInitDog, usePreloadDogs } from '../hooks'

export const DogPics = () => {
  const [left, setLeft] = useState(null)
  const [mid, setMid] = useState(null)
  const [right, setRight] = useState(null)
  const [preloadDogs, setPreloadDogs] = usePreloadDogs()

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

  return (
    <div className='main-pic-div'>
      <img className='left-pic' src={left ?? './demo-main-pic.jpg'} alt='' />
      <button onClick={previousClickHandler} className='previous' >&#8249;</button>
      <img className='middle-pic' src={mid ?? './demo-main-pic.jpg'} alt='' />
      <button onClick={nextClickHandler} className='next' >&#8250;</button>
      <img className='right-pic' src={right ?? './demo-main-pic.jpg'} alt='' />
    </div>
  )
}
