import React from 'react'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import FormEmail from '../../components/FormEmail'
import Footer from '../../components/Footer'
import Buildings from '../../assets/images/buildings-woman.jpg'
import './styles.css'

const Contact = () => {
  return (
    <>
      <Header />
      <Banner image={Buildings} title='Contatos' subtitle='Contatos' />
      <main className='main-container-contact'>
        <section className='title-text-contact'>
          <h1 className='title-with-underline-contact'>
            Entre em contato conosco!
          </h1>
          <p>
            Precisa de assistência? Nossos especialistas estão à disposição.
          </p>
          <p>
            Escolha o contato que melhor se encaixa na sua necessidade ou nos
            envie uma mensagem através do formulário.
          </p>
        </section>

        <section className='contact-columns'>
          <div className='contact-column'>
            <div className='whatsapp-icon'>
              <i
                className='fab fa-whatsapp'
                aria-label='Ícone do WhatsApp'
                style={{ fontSize: '24px', color: '#03CCFF' }}></i>
              <h3>Contatos</h3>
            </div>
            <div className='icon-container-contact'>
              <div className='info'>
                <p>Entre em contato com nossos setores:</p>
                <a
                  href='https://api.whatsapp.com/send?phone=/'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='Entrar em contato com o setor de atendimento'>
                  (41) 3030-3030
                </a>
              </div>
            </div>
            <div className='icon-container-contact'>
              <div className='info'>
                <p>Solicite uma Proposta:</p>
                <a
                  href='https://api.whatsapp.com/send?phone=/'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='Entrar em contato com o setor de propostas'>
                  (41) 9898-9898
                </a>
              </div>
            </div>

            <div className='contact-details'>
              <div className='email-icon'>
                <i
                  className='fas fa-envelope'
                  aria-label='Ícone de email'
                  style={{ fontSize: '20px', color: '#03CCFF' }}></i>
                <h3>Email</h3>
              </div>
              <div className='icon-container-contact'>
                <div className='info'>
                  <p>
                    <a href='mailto:/'>condoexpert@condoexpert.com.br</a>
                  </p>
                </div>
              </div>
              <div className='address-icon'>
                <i
                  className='fas fa-map-marker-alt'
                  aria-label='Ícone de endereço'
                  style={{ fontSize: '20px', color: '#03CCFF' }}></i>
                <h3>Endereço</h3>
              </div>
              <div className='icon-container-contact'>
                <div className='info'>
                  <p>Rua das Empresas, 456 – Sala 301 – Centro</p>
                  <p>Pinhais / PR – CEP 01000-000</p>
                </div>
              </div>
            </div>
          </div>
          <FormEmail />
        </section>

        <section className='map-container'>
          <iframe
            title='Mapa de localização da CondoExpert'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57654.54522553753!2d-49.201745973760985!3d-25.42458368670178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dcee4d0fa83283%3A0xf5fb4b1a0e5bd311!2sPinhais%2C%20PR!5e0!3m2!1spt-BR!2sbr!4v1725921782033!5m2!1spt-BR!2sbr'
            width='600'
            height='450'
            style={{ border: 0 }}
            allowFullScreen
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'></iframe>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Contact
