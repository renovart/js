import React from 'react'
import './about.css'
import ME from '../../assets/Me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
export const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>
<div className='container about__container'>
      <div className='about__me'>
        <div className="about__me-image">
          <img src={ME} alt="About Image" />
        </div>
        </div>
      <div className='about__content'>
     <div className="about__cards">

   <article className='about__card'>
     <FaAward className='about__icon'/>
     <h5>Experience</h5>
     <small>3+ Years working </small>
   </article>

   
   <article className='about__card'>
     <FiUsers className='about__icon'/>
     <h5>Clients</h5>
     <small>50+ Worldwide</small>
   </article>

   
   <article className='about__card'>
     <VscFolderLibrary className='about__icon'/>
     <h5>Projects</h5>
     <small>80+ Completed</small>
   </article>

 </div>

<p>
  Hi! My name is Emmanuel. I am a Web Developer, and I'm very passionate and dedicated to my work. With 3 years experience as a professional Web developer,
  I have acquired the skills and knowledge necessary to make your project a success. 
</p>

<a href='#contact'className='btn btn-primary'>Let's Talk</a>


      

      </div>
      </div>
     </section>
  )
}
export default About