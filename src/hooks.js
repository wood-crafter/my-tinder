import { useEffect, useRef } from 'react'

export const useFirstMount = () => {
  const isFirstMount = useRef(true)

  useEffect(() => {
    return () => {
      isFirstMount.current = false
    }
  }, [])

  return isFirstMount
}