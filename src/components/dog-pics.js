import React, { useCallback, useEffect, useState } from 'react'
import { usePreloadDogs } from '../hooks'

export const DogPics = () => {
  const [left, setLeft] = useState(null)
  const [mid, setMid] = useState(null)
  const [right, setRight] = useState(null)
  const { getDog, isEmpty } = usePreloadDogs()

  useEffect(() => {
    if (isEmpty) return

    if (left === null) return setLeft(getDog())
    if (mid === null) return setMid(getDog())
    if (right === null) return setRight(getDog())
  }, [getDog, isEmpty, left, mid, right])

  const nextClickHandler = useCallback(async () => {
    setRight(mid)
    setMid(left)

    setLeft(null)
  }, [left, mid])

  const previousClickHandler = useCallback(async () => {
    setLeft(mid)
    setMid(right)

    setRight(null)
  }, [mid, right])

  const handleArrowKeyDown = async (e) => {
    switch (e.key) {
      case 'ArrowLeft': await previousClickHandler()
        break
      case 'ArrowRight': await nextClickHandler()
        break
    }
  }

  return (
    <div className='main-pic-div' onKeyDown={handleArrowKeyDown}>
      <img className='left-pic' src={left ?? './demo-main-pic.jpg'} alt='' />
      <button onClick={previousClickHandler} className='previous' >&#8249;</button>
      <img className='middle-pic' src={mid ?? './demo-main-pic.jpg'} alt='' />
      <button onClick={nextClickHandler} className='next' >&#8250;</button>
      <img className='right-pic' src={right ?? './demo-main-pic.jpg'} alt='' />
    </div>
  )
}
