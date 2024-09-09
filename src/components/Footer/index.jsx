import React from 'react'
import LogoCondo from '../../assets/images/logo-condo.png'
import './styles.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='footer'>
      <div className='container-footer'>
        <div className='footer-image'>
          <a href='/'>
            <img
              src={LogoCondo}
              alt='Logo CondoExpert'
              className='logo-footer'
            />
          </a>
        </div>
        <div className='footer-navigation'>
          <div className='navigation'>
            <p>Navegação</p>
            <ul>
              <li>
                <a href='/' aria-label='Ir para a página inicial'>
                  Início
                </a>
              </li>
              <li>
                <a href='/sobre' aria-label='Ir para a seção Sobre'>
                  Sobre
                </a>
              </li>
              <li>
                <a href='/servicos' aria-label='Ir para a seção Serviços'>
                  Serviços
                </a>
              </li>
              <li>
                <a href='/contato' aria-label='Ir para a seção Contato'>
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>
        <section className='footer-contacts'>
          <div className='contacts'>
            <p>Contatos</p>
            <div className='contact-info'>
              <div className='contact-item'>
                <i
                  className='fab fa-whatsapp'
                  aria-label='Ícone do WhatsApp'></i>
                <p>(41) 3030-3030</p>
              </div>
              <div className='contact-item'>
                <i
                  className='fas fa-phone-alt'
                  aria-label='Ícone do telefone'></i>
                <p>(41) 3333-4444</p>
              </div>
              <div className='contact-item'>
                <i className='fas fa-envelope' aria-label='Ícone de email'></i>
                <p>condoexpert@condoexpert.com.br</p>
              </div>
              <div className='contact-item' aria-label='Ícone de localização'>
                <i className='fas fa-map-marker-alt'></i>
                <p>
                  Rua das Empresas, 456 – Sala 301 – Centro Pinhais / PR – CEP
                  01000-000
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className='footer-service'>
          <div className='opening-hours'>
            <p>Atendimento</p>
            <p>Atendimento de segunda a sexta</p>
            <p>Das 09:00 às 18:00</p>
            <div className='social-media'>
              <a rel='noopener noreferrer' aria-label='WhatsApp'>
                <i className='fab fa-whatsapp'></i>
              </a>
              <a rel='noopener noreferrer' aria-label='Facebook'>
                <i className='fab fa-facebook-f'></i>
              </a>
              <a rel='noopener noreferrer' aria-label='Instagram'>
                <i className='fab fa-instagram'></i>
              </a>
            </div>
          </div>
        </section>
      </div>
      <hr></hr>
      <p className='copyright'>
        CondoExpert &copy; {currentYear} - Todos os direitos reservados.
      </p>
    </footer>
  )
}

export default Footer
