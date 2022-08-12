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
  const preloadingCount = useRef(0)

  const { isFirstMount } = useFirstMountEffect(() => {
    preloadingCount.current = 3

    Promise.all([fetchDog(), fetchDog(), fetchDog()])
      .then(dogs => {
        setPreloadDogs(() => {
          const dogUrls = dogs.map(dog => dog.message)

          preloadUrls(dogUrls)
          preloadingCount.current = 0

          return new Set(dogUrls)
        })
      })
  })

  useEffect(() => {
    if (isFirstMount.current) return
    if (preloadDogs.size >= 3) return
    if (preloadingCount.current >= 3) return

    const preloadCount = 3 - preloadDogs.size

    preloadingCount.current += preloadCount

    const fetchPromises = Array.from({ length: preloadCount })
      .map(fetchDog)

    Promise.all(fetchPromises).then(dogs => {
      const dogUrls = dogs.map(dog => dog.message)

      preloadUrls(dogUrls)
      preloadingCount.current -= preloadCount

      setPreloadDogs((preloadDogs) => {
        return new Set([...preloadDogs, ...dogUrls])
      })
    })
  }, [preloadDogs, isFirstMount])

  return {
    getDog () {
      if (preloadDogs.size === 0) return null

      const [dog, ...otherDogs] = preloadDogs

      setPreloadDogs(new Set(otherDogs))
      return dog
    },
    isEmpty: preloadDogs.size === 0
  }
}
