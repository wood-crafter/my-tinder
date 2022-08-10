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

const preloadUrls = (urls) => {
  urls.forEach(url => new Image(url))
}

export const usePreloadDogs = () => {
  const [preloadDogs, setPreloadDogs] = useState([])
  const isFirstMount = useFirstMount()

  useEffect(() => {
    if (isFirstMount.current) {
      Promise.all([getDog(), getDog(), getDog()])
        .then(dogs => {
          setPreloadDogs(() => {
            const dogUrls = dogs.map(dog => dog.message)

            preloadUrls(dogUrls)

            return dogUrls
          })
        })
    } else {
      getDog().then((dog) => {
        setPreloadDogs((preloadDogs) => {
          const dogUrl = dog.message

          preloadDogs.push(dogUrl)

          preloadUrls([dogUrl])

          return preloadDogs
        })
      })
    }
  }, [isFirstMount, preloadDogs])

  return [preloadDogs, setPreloadDogs]
}
