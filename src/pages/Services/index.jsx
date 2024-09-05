import React from 'react'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Testimonials from '../../components/Testimonials'
import Footer from '../../components/Footer'
import PreloaderWrapper from '../../components/PreloaderWrapper'
import Desktop from '../../assets/images/images5.jpg'
import Write from '../../assets/icons/write.png'
import Customer from '../../assets/icons/customer.png'
import Maintenance from '../../assets/icons/maintenance.png'
import Accounting from '../../assets/icons/accounting.png'
import './Services.css'

const Services = () => {
  const imagesToLoad = [Desktop, Write, Customer, Maintenance, Accounting]

  return (
    <>
      <PreloaderWrapper images={imagesToLoad}>
        <Header />
        <Banner
          image={Desktop}
          title={'Nossos Serviços'}
          subtitle={'Serviços'}
        />
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
                <li>Atendimento Personalizado aos moradores e síndicos;</li>
                <li>Suporte para Acesso ao Site e Aplicativo;</li>
                <li>Atualização de Cadastro;</li>
                <li>Reserva de Salão de Festas e Churrasqueira;</li>
                <li>Entrega e Retirada de Malote;</li>
                <li>
                  Dúvidas sobre Regulamento Interno e Convenção Condominial;
                </li>
                <li>Atendimento através de chat;</li>
                <li>Auditoria.</li>
              </ul>
            </div>
            <div className='card-services'>
              <img src={Write} alt='Ícone de Cobrança' />
              <h2>Cobrança</h2>
              <ul>
                <li>
                  Emissão das cotas condominiais aprovadas em assembleias;
                </li>
                <li>Envio do boleto com antecedência ao condomínio;</li>
                <li>Disponibilização via digital (e-mail e App );</li>
                <li>
                  Atendimento personalizado ao cliente, sempre com foco em
                  baixar o índice de inadimplência;
                </li>
                <li>Emissão de Certidão Negativa de Débito;</li>
                <li>
                  Recuperação de débitos pré-jurídico através de cartas, contato
                  telefônico, e-mails e WhatsApp.
                </li>
              </ul>
            </div>
            <div className='card-services'>
              <img src={Maintenance} alt='Ícone de Manutenção' />
              <h2>Controle de Manutenções Obrigatórias</h2>
              <ul>
                <li>
                  Acompanhamento e Controle Preventivo das Manutenções
                  Obrigatórias do Condomínio;
                </li>
                <li>
                  Organização das propostas e orçamentos para tomada de decisão
                  do Condomínio.
                </li>
                <li>
                  Acompanhamento e orientação sobre as responsabilidades cíveis
                  e criminais das contratações relacionadas a manutenções
                  obrigatórias.
                </li>
              </ul>
            </div>
            <div className='card-services'>
              <img src={Accounting} alt='Ícone de Gestão Financeira' />
              <h2>Gestão Financeira</h2>
              <ul>
                <li>Pagamento das despesas ordinárias e extraordinárias;</li>
                <li>
                  Elaboração das pastas de prestações de contas, com relatórios
                  detalhados de receitas e despesas para acesso de todos os
                  condôminos;
                </li>
                <li>Elaboração de previsão orçamentária;</li>
                <li>Análise financeira.</li>
              </ul>
            </div>
          </div>
          <Testimonials />
        </section>
        <Footer />
      </PreloaderWrapper>
    </>
  )
}

export default Services
