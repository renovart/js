import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsInstagram} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import  { useRef } from 'react';
import emailjs from 'emailjs-com'

 const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_y7hda8i', 'template_6eg3igg', form.current, 'm5V9v2tba4oOcRMRv')
   
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>mumbasam12@gmail.com</h5>
            <a href="mailto:mumbasam12@gmail.com" target="_blank" >Send a message</a>
          </article>
          <article className='contact__option'>
            <BsInstagram  className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>mr_mumba1</h5>
            <a href='https://www.instagram.com/mr_mumba1/'  target="_blank" >Send a message</a>
          </article>
          <article className='contact__option'>
            <BsInstagram  className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>Renovart</h5>
            <a  href="https://www.instagram.com/renovart.io/"  target="_blank" >Send a message</a>
          </article>
        </div>
        {/* END OF OPTIONS */}
        <form action={form} onClick={sendEmail}>
          <input type="text" name='name' placeholder="Your Full Name" required/>
          <input type="email" name='email'  placeholder="Your Email" required />
          <textarea name="message" rows="7"  placeholder="Your Message" required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}
export default Contact