import React, { useState, useEffect } from 'react'
import Preloader from '../Preloader'

const PreloaderWrapper = ({ children, images }) => {
  const [showPreloader, setShowPreloader] = useState(false)

  useEffect(() => {
    let loadedCount = 0
    let timeoutId

    const showLoader = () => {
      timeoutId = setTimeout(() => {
        setShowPreloader(true)
      }, 1000)
    }

    const hideLoader = () => {
      clearTimeout(timeoutId)
      setShowPreloader(false)
    }
    showLoader()

    images.forEach(src => {
      const img = new Image()
      img.src = src
      img.onload = () => {
        loadedCount++
        if (loadedCount === images.length) {
          hideLoader()
        }
      }
      img.onerror = () => {
        hideLoader()
      }
    })

    return () => {
      clearTimeout(timeoutId)
    }
  }, [images])

  return showPreloader ? <Preloader /> : <>{children}</>
}

export default PreloaderWrapper
