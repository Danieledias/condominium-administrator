import React, { useState, useEffect } from 'react'
import slides from '../../helpers/slidesData'
import PreloaderWrapper from '../../components/PreloaderWrapper'
import './styles.css'

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [intervalId, setIntervalId] = useState(null)
  const [isMobile, setIsMobile] = useState(false)

  const imagesToLoad = slides.map(slide => slide.image)

  const handleImageChange = index => {
    setCurrentIndex(index)

    if (intervalId) {
      clearInterval(intervalId)
    }
    const newIntervalId = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % slides.length)
    }, 10000)
    setIntervalId(newIntervalId)
  }

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    const initialIntervalId = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % slides.length)
    }, 10000)

    setIntervalId(initialIntervalId)
    return () => clearInterval(initialIntervalId)
  }, [])

  return (
    <>
      <PreloaderWrapper images={imagesToLoad}>
        <section className='slider'>
          <div className='slides'>
            <div className='slide-container'>
              <img
                key={currentIndex}
                src={slides[currentIndex].image}
                alt={`Slide ${currentIndex + 1}: ${slides[currentIndex].title}`}
                className='slide'
              />
            </div>
            <div className='manual-navigation'>
              {slides.map((_, index) => (
                <label key={index} className='manual-btn'>
                  <input
                    type='radio'
                    name='radio-button'
                    checked={currentIndex === index}
                    onChange={() => handleImageChange(index)}
                  />
                  <span className='custom-radio'></span>
                </label>
              ))}
            </div>
          </div>
          <div className='text-container'>
            <h1 key={currentIndex + '-title'}>{slides[currentIndex].title}</h1>
            {isMobile ? (
              <p key={currentIndex + '-subtitle'}>
                {`${slides[currentIndex].subtitle} ${slides[currentIndex].subtitle2}`}
              </p>
            ) : (
              <p key={currentIndex + '-subtitle'}>
                {slides[currentIndex].subtitle}
                <br />
                {slides[currentIndex].subtitle2}
              </p>
            )}
            {slides[currentIndex].buttonText &&
              slides[currentIndex].buttonLink && (
                <a
                  href={slides[currentIndex].buttonLink}
                  className='banner-button'
                  key={currentIndex + '-button'}>
                  {slides[currentIndex].buttonText}
                </a>
              )}
          </div>
        </section>
      </PreloaderWrapper>
    </>
  )
}

export default Slider
