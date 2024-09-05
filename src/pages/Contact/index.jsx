import React from 'react'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import FormEmail from '../../components/FormEmail'
import Footer from '../../components/Footer'
import PreloaderWrapper from '../../components/PreloaderWrapper'
import Buildings from '../../assets/images/buildings-woman.jpg'
import './contact.css'

const Contact = () => {
  return (
    <>
      <PreloaderWrapper images={[Buildings]}>
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
                    href='https://api.whatsapp.com/send?phone=554130590304'
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='Entrar em contato com o setor de atendimento'>
                    (41) 3732-4304
                  </a>
                </div>
              </div>
              <div className='icon-container-contact'>
                <div className='info'>
                  <p>Solicite uma Proposta:</p>
                  <a
                    href='https://api.whatsapp.com/send?phone=5541987406683'
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='Entrar em contato com o setor de propostas'>
                    (41) 98740-6683 - Aldivina
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
                      <a href='mailto:santaritaadm@santaritaadm.com.br'>
                        santaritaadm@santaritaadm.com.br
                      </a>
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
                    <p>Rua 11 de Junho, 303 – unidade 03 – Centro</p>
                    <p>Pinhais / PR – CEP 83323-050</p>
                  </div>
                </div>
              </div>
            </div>
            <FormEmail />
          </section>

          <section className='map-container'>
            <iframe
              title='Mapa de localização da Santa Rita Administração'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.013128314238!2d-49.203260484474665!3d-25.440487883796896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce549bd55e843%3A0xd3e71fbd4a64c805!2sR.%2011%20de%20Junho%2C%20303%20-%20Centro%2C%20Pinhais%20-%20PR%2C%2083323-050%2C%20Brasil!5e0!3m2!1sen!2sus!4v1685558893539!5m2!1sen!2sus'
              width='600'
              height='450'
              style={{ border: 0 }}
              allowFullScreen
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'></iframe>
          </section>
        </main>
        <Footer />
      </PreloaderWrapper>
    </>
  )
}

export default Contact
