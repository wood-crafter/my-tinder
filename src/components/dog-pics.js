import React, { useCallback, useEffect, useRef, useState } from 'react'
import { usePreloadDogs } from '../hooks'

export const DogPics = () => {
  const [left, setLeft] = useState(null)
  const [mid, setMid] = useState(null)
  const [right, setRight] = useState(null)
  const { getDog, isEmpty } = usePreloadDogs()
  const currentIndex = useRef(1)

  useEffect(() => {
    if (isEmpty) return

    if (!left) return setLeft(getDog(currentIndex.current - 1))
    if (!mid) return setMid(getDog(currentIndex.current))
    if (!right) return setRight(getDog(currentIndex.current + 1))
  }, [getDog, isEmpty, left, mid, right])

  const nextClickHandler = useCallback(async () => {
    currentIndex.current = (currentIndex.current + 1) % 10
    const rightIndex = (currentIndex.current + 1) % 10

    setRight(getDog(rightIndex))
    setMid(right)

    setLeft(mid)
  }, [mid, right, getDog])

  const previousClickHandler = useCallback(async () => {
    currentIndex.current = (currentIndex.current === 0 ? 9 : (currentIndex.current - 1) % 10)
    const leftIndex = (currentIndex.current === 0 ? 9 : (currentIndex.current - 1) % 10)

    setMid(left)
    setRight(mid)

    setLeft(getDog(leftIndex))
  }, [mid, left, getDog])

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
      <AsyncImg className="left-pic" src={left} />
      <button onClick={previousClickHandler} className='previous' >&#8249;</button>
      <AsyncImg className="middle-pic" src={mid} />
      <button onClick={nextClickHandler} className='next' >&#8250;</button>
      <AsyncImg className="right-pic" src={right} />
    </div>
  )
}

const AsyncImg = ({ src, className }) => {
  return (
    <img
      className={className}
      src={src || './demo-main-pic.jpg'}
    />
  )
}
