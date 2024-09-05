import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faXmark,
  faBars,
  faHouse,
  faUser,
  faGear,
  faPhone,
  faBuilding,
} from '@fortawesome/free-solid-svg-icons'
import './menuMobile.css'

const MenuMobile = () => {
  const location = useLocation()
  const [isMenuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <>
      <div className='open-menu-mobile' onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div className={`menu-mobile ${isMenuOpen ? 'open-menu' : ''}`}>
        <div className='close-button' onClick={closeMenu}>
          <FontAwesomeIcon
            icon={faXmark}
            style={{ color: 'white', fontSize: '30px' }}
          />
        </div>

        <nav className='nav-container-mobile'>
          <ul>
            <li>
              <Link
                to='/'
                className={location.pathname === '/' ? 'active' : ''}
                onClick={closeMenu}>
                <FontAwesomeIcon icon={faHouse} className='spacing-icons' />
                Início
              </Link>
            </li>
            <li>
              <Link
                to='/sobre'
                className={location.pathname === '/sobre' ? 'active' : ''}
                onClick={closeMenu}>
                <FontAwesomeIcon icon={faUser} className='spacing-icons' />
                Sobre
              </Link>
            </li>
            <li>
              <Link
                to='/servicos'
                className={location.pathname === '/servicos' ? 'active' : ''}
                onClick={closeMenu}>
                <FontAwesomeIcon icon={faGear} className='spacing-icons' />
                Serviços
              </Link>
            </li>
            <li>
              <Link
                to='/contato'
                className={location.pathname === '/contato' ? 'active' : ''}
                onClick={closeMenu}>
                <FontAwesomeIcon icon={faPhone} className='spacing-icons' />
                Contato
              </Link>
            </li>
            <li>
              <a
                href='https://condprime.com/home/login/?id=14&painel=cond'
                target='_blank'
                rel='noopener noreferrer'
                className='external-link'>
                <FontAwesomeIcon icon={faBuilding} className='spacing-icons' />
                Acesse seu condomínio
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {isMenuOpen && (
        <div className='overlay-menu show' onClick={closeMenu}></div>
      )}
    </>
  )
}

export default MenuMobile
