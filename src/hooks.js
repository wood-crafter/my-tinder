import { useEffect, useRef, useState } from 'react'
import { getDog } from './utils/fetch-request'

export const useFirstMount = () => {
  const isFirstMount = useRef(true)

  useEffect(() => {
    return () => {
      isFirstMount.current = false
    }
  }, [])

  return isFirstMount
}

export const useInitDog = (flag) => {
  const [initDogs, setInitDogs] = useState([])

  useEffect(() => {
    if (flag) {
      Promise.all([getDog(), getDog(), getDog()])
        .then(dogs => {
          setInitDogs(() => {
            return dogs.map(dog => dog.message)
          })
        })
    }
  }, [])

  return initDogs
}