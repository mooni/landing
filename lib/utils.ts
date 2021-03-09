import { useEffect, useState } from 'react'

export const useScroll = () => {
  const [scroll, setScroll] = useState<number>(0)
  useEffect(() => {
    const onScroll = (e) => {
      setScroll(e.target.documentElement.scrollTop)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return scroll
}
