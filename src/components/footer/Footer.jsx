import React from 'react'
import './footer.css'
import {FaInstagram} from 'react-icons/fa'
const Footer = () => {
  return (
    <footer>
      <a href='https://www.instagram.com/renovart.io/' className='footer__logo'>Renovart</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#Portifolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href='https://www.instagram.com/renovart.io/'><FaInstagram/></a>
      </div>

     <div className="footer__copyright">
      <small>&copy; GodSpeed. All right reserved.</small> 
     </div>
    </footer>
  )
}

export default Footer