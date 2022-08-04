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
  const isFirstMount = useRef(true)

  useEffect(() => {
    if (preloadDogs.length < 4) {
      getDog().then(dog => {
        setPreloadDogs((preloadDogs) => {
          preloadDogs.push(dog.message)
          console.info(preloadDogs)
          return preloadDogs
        })
      })
    } else if (isFirstMount.current) {
      Promise.all([getDog(), getDog(), getDog()])
        .then(dogs => {
          setPreloadDogs(() => {
            return dogs.map(dog => dog.message)
          })
        })
    }

    return () => {
      isFirstMount.current = false
    }
  }, [preloadDogs])

  return preloadDogs
}