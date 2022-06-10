import React from 'react'
import './testimonial.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
// import Swiper core and required modules
import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

import 'swiper/swiper.min.css';







export const Testimonials = () => {
  return (
    <section id='testimonial'>
      <h5>Reviews from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonial__container"
           // install Swiper modules
           modules={[ Pagination]}
           spaceBetween={40}
           slidesPerView={1}
           navigation
           pagination={{ clickable: true }}
         
      >

        
      <SwiperSlide className="testimonial">
        <div className="client__avatar">
    <img src={AVTR1} alt='Avatar One' />
   
        </div>
        <h5 className='client__name'>Vee</h5>
    <small className='client__review'>
      He designed and made my brand identity template,
      his design skills are top notch in my opinion
      delivers on time.
    </small>
          </SwiperSlide>  
          <SwiperSlide className="testimonial">
        <div className="client__avatar">
    <img src={AVTR2} alt='Avatar One' />
   
        </div>
        <h5 className='client__name'>Paul</h5>
    <small className='client__review'>
         His working speed is fast and up to the quality, 
    Good communication skills i highy recommend him.
   
    </small>

          </SwiperSlide>  
          <SwiperSlide className="testimonial">
        <div className="client__avatar">
    <img src={AVTR3} alt='Avatar One' />
        </div>
        <h5 className='client__name'>Richard</h5>
    <small className='client__review'>
      The website he designed for me looks amazing from the colors to the layout 
      and his pricing is very affordable.
    </small>
          </SwiperSlide>  

          <SwiperSlide className="testimonial">
        <div className="client__avatar">
    <img src={AVTR4} alt='Avatar One' />
        </div>
        <h5 className='client__name'>Enerst Achiver</h5>
    <small className='client__review'>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque velit veniam excepturi 
      nemo repellat accusamus, ducimus earum nam quisquam maiores? Harum quibusdam quisquam, 
      sint nihil inventore quaerat ipsa vero aliquam.
    </small>
          </SwiperSlide>  
      </Swiper>
    </section>
  )
}
export default Testimonials