import React from 'react'
import LogoSantaRita from '../../assets/images/logo-santa-rita.png'
import './styles.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='footer'>
      <div className='container-footer'>
        <div className='footer-image'>
          <a href='/'>
            <img
              src={LogoSantaRita}
              alt='Logo Santa Rita'
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
                <p>(41) 3059-0304</p>
              </div>
              <div className='contact-item'>
                <i
                  className='fas fa-phone-alt'
                  aria-label='Ícone do telefone'></i>
                <p>(41) 3059-0304</p>
              </div>
              <div className='contact-item'>
                <i className='fas fa-envelope' aria-label='Ícone de email'></i>
                <p>santaritaadm@santaritaadm.com.br</p>
              </div>
              <div className='contact-item' aria-label='Ícone de localização'>
                <i className='fas fa-map-marker-alt'></i>
                <p>
                  Rua 11 de Junho, 303 – unidade 03 – Centro Pinhais / PR – CEP
                  83323-050
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className='footer-service'>
          <div className='opening-hours'>
            <p>Atendimento</p>
            <p>Atendimento de segunda a sexta</p>
            <p>Das 08:30 às 12:00 e das 13:30 às 18:00</p>
            <div className='social-media'>
              <a
                href='https://api.whatsapp.com/send?phone=554137324304'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='WhatsApp'>
                <i className='fab fa-whatsapp'></i>
              </a>
              <a
                href='https://www.facebook.com/santaritaadm/'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Facebook'>
                <i className='fab fa-facebook-f'></i>
              </a>
              <a
                href='https://www.instagram.com/santaritaadm/'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Instagram'>
                <i className='fab fa-instagram'></i>
              </a>
            </div>
          </div>
        </section>
      </div>
      <hr></hr>
      <p className='copyright'>
        Santa Rita &copy; {currentYear} - Todos os direitos reservados.
      </p>
    </footer>
  )
}

export default Footer
