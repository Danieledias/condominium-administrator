import React, { useRef, useState, useEffect } from 'react'
import testimonialsData from '../../helpers/testimonialsData'
import RightArrow from '../../assets/icons/right-arrow.png'
import LeftArrow from '../../assets/icons/left-arrow.png'
import LeftArrowDisabled from '../../assets/icons/disable-left-arrow.png'
import RightArrowDisabled from '../../assets/icons/disable-right-arrow.png'
import './styles.css'

const Testimonials = () => {
  const carousel = useRef(null)
  const [isAtStart, setIsAtStart] = useState(true)
  const [isAtEnd, setIsAtEnd] = useState(false)

  const handleScroll = () => {
    if (carousel.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carousel.current
      setIsAtStart(scrollLeft === 0)
      setIsAtEnd(scrollLeft + clientWidth === scrollWidth)
    }
  }

  const handleLeftClick = e => {
    e.preventDefault()
    if (carousel.current) {
      carousel.current.scrollLeft -= carousel.current.offsetWidth
    }
  }

  const handleRightClick = e => {
    e.preventDefault()
    if (carousel.current) {
      carousel.current.scrollLeft += carousel.current.offsetWidth
    }
  }

  useEffect(() => {
    const carouselElement = carousel.current

    handleScroll()
    if (carouselElement) {
      carouselElement.addEventListener('scroll', handleScroll)
    }

    return () => {
      if (carouselElement) {
        carouselElement.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  return (
    <article className='testimonial-section'>
      <h2 className='testimonial-title'>O que nossos clientes dizem</h2>
      <div className='testimonial-container' ref={carousel}>
        {testimonialsData.map((testimonial, index) => (
          <div className='testimonial' key={index}>
            <div className='stars'>{testimonial.stars}</div>
            <p>{testimonial.text}</p>
            <h3>{testimonial.author}</h3>
            <i className='fa fa-quote-right testimonial-quote-icon'></i>
          </div>
        ))}
      </div>

      <div className='ArrowsButton'>
        <button onClick={handleLeftClick} disabled={isAtStart}>
          {!isAtStart ? (
            <img src={LeftArrow} alt='Seta Esquerda' />
          ) : (
            <img src={LeftArrowDisabled} alt='Seta Esquerda Desabilitada' />
          )}
        </button>
        <button onClick={handleRightClick} disabled={isAtEnd}>
          {!isAtEnd ? (
            <img src={RightArrow} alt='Seta Direita' />
          ) : (
            <img src={RightArrowDisabled} alt='Seta Direita Desabilitada' />
          )}
        </button>
      </div>
    </article>
  )
}

export default Testimonials
