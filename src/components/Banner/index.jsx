import React from 'react'
import './styles.css'

const Banner = ({ image, title, subtitle }) => {
  return (
    <div className='banner-container'>
      <div
        className='banner-image'
        style={{ backgroundImage: `url(${image})` }}>
        <div className='text-container-banner'>
          <h1>{title}</h1>
          <p>
            <a href='/' className='breadcrumb-link'>
              Início
            </a>{' '}
            &gt; {subtitle}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Banner
