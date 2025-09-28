import { useState, useEffect, useCallback } from 'react'

export const useAnimation = (initialState = true) => {
  const [isAnimating, setIsAnimating] = useState(initialState)
  const [animationSpeed, setAnimationSpeed] = useState(1)
  const [animationType, setAnimationType] = useState('dance')

  const toggleAnimation = useCallback(() => {
    setIsAnimating(prev => !prev)
  }, [])

  const changeAnimationSpeed = useCallback((speed) => {
    setAnimationSpeed(speed)
  }, [])

  const changeAnimationType = useCallback((type) => {
    setAnimationType(type)
  }, [])

  const pauseAnimation = useCallback(() => {
    setIsAnimating(false)
  }, [])

  const startAnimation = useCallback(() => {
    setIsAnimating(true)
  }, [])

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.code === 'Space') {
        event.preventDefault()
        toggleAnimation()
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [toggleAnimation])

  return {
    isAnimating,
    animationSpeed,
    animationType,
    toggleAnimation,
    changeAnimationSpeed,
    changeAnimationType,
    pauseAnimation,
    startAnimation
  }
}