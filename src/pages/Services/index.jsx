import React from 'react'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Testimonials from '../../components/Testimonials'
import Footer from '../../components/Footer'
import Desktop from '../../assets/images/images5.jpg'
import Write from '../../assets/icons/write.png'
import Customer from '../../assets/icons/customer.png'
import Maintenance from '../../assets/icons/maintenance.png'
import Accounting from '../../assets/icons/accounting.png'
import './styles.css'

const Services = () => {
  return (
    <>
      <Header />
      <Banner image={Desktop} title={'Nossos Serviços'} subtitle={'Serviços'} />
      <section className='main-container-services'>
        <div className='content-title-services'>
          <h1 className='title-with-underline-services'>
            Excelência em Gestão de Condomínios
          </h1>
          <h2>
            Transformando o Gerenciamento em uma Experiência Tranquila e
            Eficiente
          </h2>
        </div>
        <div className='card-container-services'>
          <div className='card-services'>
            <img src={Customer} alt='Ícone de Suporte Administrativo' />
            <h2>Suporte Administrativo</h2>
            <ul>
              <li>Atendimento dedicado para residentes e gestores;</li>
              <li>Verificação e aprimoramento de processos administrativos;</li>
              <li>Atualização e manutenção de registros cadastrais;</li>
              <li>Gestão de correspondências e documentos importantes;</li>
              <li>
                Orientação sobre normas internas e políticas de condomínio;
              </li>
              <li>
                Suporte contínuo através de diversos canais de comunicação;
              </li>
              <li>Atendimento através de chat;</li>
              <li>Auditoria.</li>
            </ul>
          </div>
          <div className='card-services'>
            <img src={Write} alt='Ícone de Cobrança' />
            <h2>Cobrança</h2>
            <ul>
              <li>Geração de cobranças com base em decisões de assembleias;</li>
              <li>Envio proativo de boletos e notificações de pagamento;</li>
              <li>Disponibilização de informações financeiras por e-mail;</li>
              <li>
                Consultoria personalizada para reduzir taxas de inadimplência;
              </li>
              <li>Emissão de documentos de regularidade financeira;</li>
              <li>
                Ações de recuperação de créditos utilizando comunicação eficaz e
                acompanhamento próximo.
              </li>
            </ul>
          </div>
          <div className='card-services'>
            <img src={Maintenance} alt='Ícone de Manutenção' />
            <h2>Controle de Manutenções</h2>
            <ul>
              <li>
                Monitoramento contínuo das manutenções regulares e preventivas;
              </li>
              <li>
                Coordenação de propostas e análise de orçamento para manutenção
                de áreas comuns.
              </li>
              <li>
                Orientação e garantia de conformidade com normas legais e
                regulatórias em contratações de serviços de manutenção.
              </li>
            </ul>
          </div>
          <div className='card-services'>
            <img src={Accounting} alt='Ícone de Gestão Financeira' />
            <h2>Gestão Financeira</h2>
            <ul>
              <li>
                Processamento e gestão de despesas regulares e extraordinárias;
              </li>
              <li>
                Criação de relatórios financeiros claros e acessíveis para todos
                os residentes;
              </li>
              <li>
                Desenvolvimento de planos orçamentários com previsões precisas;
              </li>
              <li>Revisão e análise detalhada das finanças do condomínio.</li>
            </ul>
          </div>
        </div>
        <Testimonials />
      </section>
      <Footer />
    </>
  )
}

export default Services
