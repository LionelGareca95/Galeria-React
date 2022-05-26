import React from 'react'
import './Testimonials.css'
import {Swiper, SwiperSlide} from 'swiper/react'

const Testimonials = () => {
    const clients = [

    ]

    

  return (
    <div className="t-wrapper">
        <div className="t-headding">
            <span>Clients Always get</span>
            <span>Exceptional Work</span>
            <span>From me</span>
            <div className='blur t-blur1' style={{ background: "var(--purple)"}}></div>
            <div className='blur t-blur2' style={{ background: "skyblue"}}></div>
        </div>
        {/* Slider */}
            <Swiper></Swiper>
    </div>
  )
}

export default Testimonials