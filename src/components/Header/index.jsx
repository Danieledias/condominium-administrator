import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import MenuMobile from '../MenuMobile'
import LogoCondoExpert from '../../assets/images/logo-condo-expert.png'
import './styles.css'

const Header = () => {
  const location = useLocation()

  return (
    <header>
      <div className='header-container'>
        <div className='logo'>
          <Link to='/'>
            <img src={LogoCondoExpert} alt='Logo CondoExpoert' />
          </Link>
        </div>
        <nav className='nav-container'>
          <ul className='nav-links'>
            <li>
              <Link
                to='/'
                className={location.pathname === '/' ? 'active' : ''}>
                Início
              </Link>
            </li>
            <li>
              <Link
                to='/sobre'
                className={location.pathname === '/sobre' ? 'active' : ''}>
                Sobre
              </Link>
            </li>
            <li>
              <Link
                to='/servicos'
                className={location.pathname === '/servicos' ? 'active' : ''}>
                Serviços
              </Link>
            </li>
            <li>
              <Link
                to='/contato'
                className={location.pathname === '/contato' ? 'active' : ''}>
                Contato
              </Link>
            </li>
          </ul>
          <button className='button' type='button'>
            Acesse seu condomínio
          </button>
        </nav>
        <MenuMobile />
      </div>
    </header>
  )
}

export default Header
