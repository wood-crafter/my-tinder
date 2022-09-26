import { NavBar } from '../../components'
import React, { useContext } from 'react'

import { DogPics } from '../../components/dog-pics'
import { AuthContext } from '../../providers/use-auth'
import { Navigate } from 'react-router-dom'

import './home.css'

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

  const handleNextClick = async () => {
    setRight(mid)
    setMid(left)
    const nextLeft = await getDog()
    setLeft(nextLeft.message)
  }

  const handlePreviousClick = async () => {
    setLeft(mid)
    setMid(right)
    const nextRight = await getDog()
    setRight(nextRight.message)
  }

  const handleArrowKeyDown = async (e) => {
    if (e.key === 'ArrowLeft') {
      await handlePreviousClick()
    }

    if (e.key === 'ArrowRight') {
      await handleNextClick()
    }
  }

  // FIXME: This guard return could be turned in to a `hook`, or a `HoC`...!
  if (!user) return <Navigate to="/login" />

  return (
    <div className='home' tabIndex={0} >
      <NavBar />
      <DogPics />
    </div>
  )
}
