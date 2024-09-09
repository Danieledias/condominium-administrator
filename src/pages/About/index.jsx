import React from 'react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import TeamWork from '../../assets/icons/team-work.png'
import Commitment from '../../assets/icons/handshake.png'
import CustomerService from '../../assets/icons/headset.png'
import Statistics from '../../assets/icons/statistics.png'
import Diploma from '../../assets/icons/diploma.png'
import Light from '../../assets/icons/light-bulb.png'
import Check from '../../assets/icons/check-mark.png'
import Images from '../../assets/images/desktop.jpg'
import './styles.css'

const formatNumber = number => {
  return number.toLocaleString()
}

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <>
      <Header />
      <Banner image={Images} title={'Sobre Nós'} subtitle={'Sobre'} />
      <main className='main-container-about'>
        <div className='content-about'>
          <div className='text-about'>
            <h2 className='title-with-underline-about'>Nossa história</h2>
            <p>
              A CondoExpert foi fundada por profissionais com mais de 10 anos de
              experiência em administração condominial. Desde o início, nosso
              compromisso foi oferecer um atendimento excepcional, baseado em
              transparência, eficiência e profissionalismo.
            </p>
            <p>
              Com o passar dos anos, crescemos reconhecidos pela nossa dedicação
              em entender as necessidades de cada condomínio. Hoje, com uma
              equipe especializada em diversas áreas, como administração,
              finanças, contabilidade e apoio jurídico, continuamos a
              simplificar a gestão condominial, reduzindo custos e facilitando o
              trabalho do síndico.
            </p>

            <section aria-labelledby='missao'>
              <div style={{ display: 'flex' }}>
                <img
                  src={Check}
                  alt='Ícone de check'
                  style={{ width: '37px', height: '37px', marginTop: '32px' }}
                />
                <h2 style={{ fontSize: '30px', marginTop: '32px' }}>MISSÃO</h2>
              </div>
              <p>
                Atender com excelência às necessidades de cada cliente, através
                de um modelo de atuação pautado pela ética, inovação,
                sustentabilidade, compromisso com o serviço e valorização do ser
                humano.
              </p>
            </section>

            <section aria-labelledby='visao'>
              <div style={{ display: 'flex' }}>
                <img
                  src={Check}
                  alt='Ícone de check'
                  style={{ width: '37px', height: '37px', marginTop: '32px' }}
                />
                <h2 style={{ fontSize: '30px', marginTop: '32px' }}>VISÃO</h2>
              </div>
              <p>
                Ser a principal administradora de bens patrimoniais do mercado
                imobiliário brasileiro, priorizando a qualidade nos serviços
                oferecidos e garantindo a satisfação de nossos clientes,
                parceiros e colaboradores.
              </p>
            </section>

            <section aria-labelledby='valores'>
              <div style={{ display: 'flex', justifyContent: '' }}>
                <img
                  src={Check}
                  alt='Ícone de check'
                  style={{ width: '37px', height: '37px', marginTop: '32px' }}
                />
                <h2 style={{ fontSize: '30px', marginTop: '32px' }}>VALORES</h2>
              </div>
              <p>
                Ética – Transparência – Comprometimento – Inovação –
                Responsabilidade
              </p>
            </section>
          </div>
        </div>

        <section className='statistics-section'>
          <div className='statistics-container' ref={ref}>
            <div className='stats-container'>
              <div className='stat'>
                {inView && (
                  <span>
                    +
                    <CountUp
                      start={0}
                      end={10}
                      duration={3}
                      formattingFn={formatNumber}
                      prefix='+'
                    />
                  </span>
                )}
                <p>Anos de experiência</p>
              </div>
              <div className='stat'>
                {inView && (
                  <span>
                    +
                    <CountUp
                      start={0}
                      end={20}
                      duration={3}
                      formattingFn={formatNumber}
                      prefix='+'
                    />
                  </span>
                )}
                <p>Cidades atendidas</p>
              </div>
              <div className='stat'>
                {inView && (
                  <span>
                    +
                    <CountUp
                      start={0}
                      end={300}
                      duration={3}
                      formattingFn={formatNumber}
                      suffix='+'
                    />
                  </span>
                )}
                <p>Condomínios administrados</p>
              </div>
            </div>
          </div>
        </section>

        <section className='why-choose'>
          <h2 className='title-with-underline-short-about'>
            Por que escolher a CondoExpert?
          </h2>
          <div className='columns-about'>
            <div className='experience'>
              <div className='experience-content'>
                <img src={Statistics} alt='Imagem de estatísticas' />
                <div className='experience-text'>
                  <h2>Experiência Profissional</h2>
                  <p>
                    Nossa experiência é o que nos define. Com mais de 10 anos em
                    administração condominial, nossa equipe oferece serviços de
                    alta qualidade em gestão e suporte. Escolha a CondoExpert
                    para uma gestão eficiente e confiável.
                  </p>
                </div>
              </div>
            </div>
            <div className='experience'>
              <div className='experience-content'>
                <img src={TeamWork} alt='Imagem de trabalho em equipe' />
                <div className='experience-text'>
                  <h2>Equipe Altamente Qualificada</h2>
                  <p>
                    Nossa equipe é formada por profissionais especializados e
                    experientes. Com dedicação e competência, oferecemos
                    soluções precisas e eficazes. Conte com nossa expertise para
                    um serviço de alta qualidade e confiança.
                  </p>
                </div>
              </div>
            </div>
            <div className='experience'>
              <div className='experience-content'>
                <img
                  src={CustomerService}
                  alt='Imagem de atendimento ao cliente'
                />
                <div className='experience-text'>
                  <h2>Atendimento Dedicado</h2>
                  <p>
                    Nosso atendimento é centrado no cliente. Analisamos cada
                    necessidade individualmente, garantindo um serviço
                    personalizado e atencioso. Conte com nossa equipe para uma
                    gestão que realmente entende você.
                  </p>
                </div>
              </div>
            </div>
            <div className='experience'>
              <div className='experience-content'>
                <img src={Commitment} alt='Imagem de compromisso' />
                <div className='experience-text'>
                  <h2>Compromisso com Transparência</h2>
                  <p>
                    Nossa atuação é marcada pela transparência total. Com uma
                    comunicação clara e ética, garantimos que todas as operações
                    sejam visíveis e compreensíveis, promovendo a confiança e a
                    satisfação de nossos clientes.
                  </p>
                </div>
              </div>
            </div>
            <div className='experience'>
              <div className='experience-content'>
                <img src={Light} alt='Imagem de inovação' />
                <div className='experience-text'>
                  <h2>Soluções Personalizadas</h2>
                  <p>
                    Entendemos que cada condomínio é único. Por isso, oferecemos
                    soluções sob medida para atender às suas necessidades
                    específicas, garantindo uma gestão eficiente e satisfatória.
                  </p>
                </div>
              </div>
            </div>
            <div className='experience'>
              <div className='experience-content'>
                <img src={Diploma} alt='Imagem de qualidade comporvada' />
                <div className='experience-text'>
                  <h2>Qualidade comprovada</h2>
                  <p>
                    Nossa dedicação à excelência é refletida na satisfação dos
                    nossos clientes. Com uma abordagem focada na qualidade e no
                    atendimento, garantimos serviços de alta qualidade e
                    confiança.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default About
