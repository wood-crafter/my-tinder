import { useEffect, useRef, useState } from 'react'
import { fetchDog } from './utils/fetch-request'

export const useFirstMount = () => {
  const isFirstMount = useRef(true)

  useEffect(() => {
    return () => {
      isFirstMount.current = false
    }
  }, [])

  return isFirstMount
}

const preloadUrls = (urls) => {
  urls.forEach(url => {
    console.info(new Image(url).loading)
    console.info(url)
  })
}

const useFirstMountEffect = (onFirstMount) => {
  const isFirstMount = useFirstMount()

  useEffect(() => {
    if (isFirstMount.current) {
      onFirstMount()
    }
  }, [isFirstMount, onFirstMount])

  return { isFirstMount }
}

export const usePreloadDogs = () => {
  const [preloadDogs, setPreloadDogs] = useState(new Set())
  const preloadingCount = 7

  const { isFirstMount } = useFirstMountEffect(() => {
    Promise.all([fetchDog(), fetchDog(), fetchDog()])
      .then(dogs => {
        setPreloadDogs(() => {
          const dogUrls = dogs.map(dog => dog.message)

          preloadUrls(dogUrls)

          return new Set(dogUrls)
        })
      })
  })

  useEffect(() => {
    if (isFirstMount.current) return

    const fetchPromises = Array.from({ length: preloadingCount })
      .map(fetchDog)

    Promise.all(fetchPromises).then(dogs => {
      const dogUrls = dogs.map(dog => dog.message)

      preloadUrls(dogUrls)

      setPreloadDogs((preloadDogs) => {
        return new Set([...preloadDogs, ...dogUrls])
      })
    })
  }, [isFirstMount])

  return {
    getDog () {
      if (preloadDogs.size === 0) return null

      const [dog, ...otherDogs] = preloadDogs

      setPreloadDogs(new Set(otherDogs))
      console.info(preloadDogs)
      return dog
    },
    isEmpty: preloadDogs.size === 0
  }
}
