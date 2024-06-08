import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        const timeoutId = setTimeout(() => {
        setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
        clearTimeout(timeoutId);
        };
    }, []);

    const sendEmail = (e) => {
        e.preventDefault()
    
        emailjs
          .sendForm('service_5b76jmo', 'template_cpl6659', refForm.current, 'ukcJLNvptHpBkk9l6')
          .then(
            () => {
              alert('Message successfully sent!')
              window.location.reload(false)
            },
            () => {
              alert('Failed to send the message, please refresh and try again.')
            }
          )
      }

    return (
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['C','o','n','t','a','c','t',' ','M','e']}
                    idx={9}/>
                </h1>
                <p>
                    I am interested in all Software Engineering opportunities from freelancing to internships/full time positions!
                    I am also open to collaboration on projects. Please don't hesitate to reach out to me using this form below! 
                </p>
                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type='text' name='from_name' placeholder='Name' required></input>
                            </li>
                            <li className='half'>
                                <input type='email' name='from_email' placeholder='Email' required></input>
                            </li>
                            <li>
                                <input placeholder='Subject' type='text' name='subject' required></input>
                            </li>
                            <li>
                                <textarea placeholder='Message' name='message' required></textarea>
                            </li>
                            <li>
                                <input type='submit' className='flat-button' value='SEND'></input>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>

        </div>
        <Loader type='ball-pulse-sync' ></Loader>
        </>
    )
}

export default Contact