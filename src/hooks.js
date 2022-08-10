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

export const useInitDog = () => {
  const [initDogs, setInitDogs] = useState([])
  const isFirstMount = useFirstMount()

  useEffect(() => {
    if (isFirstMount.current) {
      Promise.all([getDog(), getDog(), getDog()])
        .then(dogs => {
          setInitDogs(() => {
            return dogs.map(dog => dog.message)
          })
        })
    }
  }, [isFirstMount])

  return initDogs
}


export const usePreloadDog = () => {
  const [preloadDogs, setPreloadDogs] = useState([])
  const isFirstMount = useFirstMount()

  useEffect(() => {
    if (!isFirstMount.current) {
      console.info('Run one time')
      getDog().then((dog) => {
        setPreloadDogs((preloadDogs) => {
          preloadDogs.push(dog.message)
          return preloadDogs
        })
      })
    }
    if (isFirstMount.current) {
      Promise.all([getDog(), getDog(), getDog()])
        .then(dogs => {
          setPreloadDogs(() => {
            return dogs.map(dog => dog.message)
          })
        })
    }
  }, [isFirstMount, preloadDogs])

  return [preloadDogs, setPreloadDogs]
}
