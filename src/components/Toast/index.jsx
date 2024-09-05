import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import './styles.css'

const Toast = ({ type, message, onClose }) => {
  const [width, setWidth] = useState(100)

  useEffect(() => {
    const timer = setInterval(() => {
      setWidth(prev => (prev > 0 ? prev - 1 : 0))
    }, 50)

    const timeout = setTimeout(() => {
      onClose()
    }, 5000)

    return () => {
      clearInterval(timer)
      clearTimeout(timeout)
    }
  }, [onClose])

  return (
    <div id='toast-box' className={`toast ${type}`}>
      <div className='toast-content'>
        <div className='toast-icon'>
          {type === 'success' ? (
            <FontAwesomeIcon icon={faCircleCheck} className='sucess-icon' />
          ) : (
            <FontAwesomeIcon icon={faCircleXmark} className='error-icon' />
          )}
        </div>
        <div className='toast-message'>{message}</div>
      </div>
      <div className='toast-progress' style={{ width: `${width}%` }}></div>
    </div>
  )
}

export default Toast
