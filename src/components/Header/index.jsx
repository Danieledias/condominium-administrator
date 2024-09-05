import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import MenuMobile from '../MenuMobile'
import LogoSantaRita from '../../assets/images/logo-santa-rita.png'
import './header.css'

const Header = () => {
  const location = useLocation()

  const handleNavigation = path => {
    window.open(path, '_blank')
  }

  return (
    <header>
      <div className='header-container'>
        <div className='logo'>
          <Link to='/'>
            <img
              src={LogoSantaRita}
              alt='Logo Santa Rita'
              className='logo-santa-rita'
            />
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
          <button
            className='button'
            type='button'
            onClick={() =>
              handleNavigation(
                'https://condprime.com/home/login/?id=14&painel=cond',
              )
            }>
            Acesse seu condomínio
          </button>
        </nav>
        <MenuMobile />
      </div>
    </header>
  )
}

export default Header
