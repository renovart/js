import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
const Services = () => {
  return (
    <section id='services'>
      <h5>What i offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='services'>
          <div className="services__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='services__list-icon' />
              <p>Web design services.</p>
            </li>
            <li>
              <BiCheck className='services__list-icon' />
              <p>Mobile app UX and UI design services.</p>
            </li>
            <li>
              <BiCheck className='services__list-icon' />
              <p>Brand and design system development.</p>
            </li>
            <li>
              <BiCheck className='services__list-icon' />
              <p>Logo Design.</p>
            </li>
            <li>
              <BiCheck className='services__list-icon' />
              <p>Graphic Design.</p>
            </li>
            <li>
              <BiCheck className='services__list-icon' />
              <p>Ad Design.</p>
            </li>
            
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className='services'>
          <div className="services__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
          <li>
              <BiCheck className='services__list-icon' />
              <p>Hosting</p>
            </li>
            <li>
              <BiCheck className='services__list-icon' />
              <p>Blog / News Management</p>
            </li>
            <li>
              <BiCheck className='services__list-icon' />
              <p>Shopping Cart / Online Ordering System / Online Payments.</p>
            </li>
            
            <li>
              <BiCheck className='services__list-icon' />
              <p>Event Booking System.</p>
            </li>
            <li>
              <BiCheck className='services__list-icon' />
              <p>Event Calendar.</p>
            </li>
            <li>
              <BiCheck className='services__list-icon' />
              <p>Search Engine Optimization(SEO).</p>
            </li>
           
            <li>
              <BiCheck className='services__list-icon' />
              <p>WordPress Support.</p>
            </li>
            <li>
              <BiCheck className='services__list-icon' />
              <p>Ecommerce Applications.</p>
            </li>
          
            
          </ul>
        </article>
        {/* END Web Development */}
        <article className='services'>
          <div className="services__head">
            <h3>Content Creation </h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='services__list-icon' />
              <p>Notable Quotes. </p>
            </li>
            <li>
              <BiCheck className='services__list-icon' />
              <p>Infographics. </p>
            </li>
            <li>
              <BiCheck className='services__list-icon' />
              <p>Podcasts. </p>
            </li>
            <li>
              <BiCheck className='services__list-icon' />
              <p>Writer. </p>
            </li>
            <li>
              <BiCheck className='services__list-icon' />
              <p>Photography. </p>
            </li>
            <li>
              <BiCheck className='services__list-icon' />
              <p>Videography. </p>
            </li>
            
          </ul>
        </article>
        {/* Content Creation */}
      </div>
    </section>
  )
}

export default Services