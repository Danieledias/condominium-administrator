import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import Toast from '../../components/Toast'
import './formEmail.css'

function FormEmail() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [showToast, setShowToast] = useState(false)
  const [toastType, setToastType] = useState('success')
  const [toastMessage, setToastMessage] = useState('')

  function sendEmail(e) {
    e.preventDefault()

    const templateParams = {
      from_name: name,
      email: email,
      message: message,
    }

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_EMAILJS_USER_ID,
      )
      .then(
        () => {
          setName('')
          setEmail('')
          setMessage('')
          showSuccessToast()
        },
        () => {
          showErrorToast()
        },
      )
  }

  const showSuccessToast = () => {
    setToastType('success')
    setToastMessage('Mensagem enviada com sucesso!')
    setShowToast(true)
  }

  const showErrorToast = () => {
    setToastType('error')
    setToastMessage(
      'Erro ao enviar mensagem!\nPor favor, tente novamente mais tarde.',
    )
    setShowToast(true)
  }

  const closeToast = () => {
    setShowToast(false)
  }

  return (
    <div className='contact-column contact-form'>
      <h3>Formulário de Contato</h3>
      <form onSubmit={sendEmail}>
        <div className='form-group'>
          <label htmlFor='name'>Nome</label>
          <input
            type='text'
            id='name'
            name='name'
            required
            onChange={e => setName(e.target.value)}
            value={name}
          />
        </div>

        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            name='email'
            required
            onChange={e => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='message'>Mensagem</label>
          <textarea
            id='message'
            name='message'
            rows='5'
            maxLength='500'
            required
            onChange={e => setMessage(e.target.value)}
            value={message}></textarea>
        </div>
        <button
          type='submit'
          aria-label='Enviar formulário de contato'
          value='Enviar'>
          Enviar
        </button>
      </form>

      {showToast && (
        <Toast type={toastType} message={toastMessage} onClose={closeToast} />
      )}
    </div>
  )
}

export default FormEmail
