import React from 'react'
import LogoLoader from '../../assets/images/logo-loader.png'
import './styles.css'

const Preloader = () => {
  return (
    <div class='loading-screen'>
      <img src={LogoLoader} alt='Logo Santa Rita' className='logo-loader' />
      <div class='loading-bar'>
        <div class='loading-bar-fill'></div>
      </div>
    </div>
  )
}

export default Preloader
