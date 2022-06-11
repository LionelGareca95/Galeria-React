import React from 'react'
import './Testimonials.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import profile1 from "../../img/profile1.jpg"
import profile2 from "../../img/profile2.jpg"
import profile3 from "../../img/profile3.jpg"
import profile4 from "../../img/profile4.jpg"
import { Pagination } from "swiper"
import 'swiper/css/pagination'
import 'swiper/css'

const Testimonials = () => {
    const clients = [
      {
        img: profile1,
        review:
        "lorem  ipsum lorem  ipsumlorem  ipsumlorem  ipsumlorem  ipsumlorem  ipsum"
      },
      {
        img: profile2,
        review:
        "lorem  ipsum lorem  ipsumlorem  ipsumlorem  ipsumlorem  ipsumlorem  ipsum"
      },
      {
        img: profile3,
        review:
        "lorem  ipsum lorem  ipsumlorem  ipsumlorem  ipsumlorem  ipsumlorem  ipsum"
      },
      {
        img: profile4,
        review:
        "lorem  ipsum lorem  ipsumlorem  ipsumlorem  ipsumlorem  ipsumlorem  ipsum"
      }
      ]


    

  return (
    <div className="t-wrapper" id='Testimonials'>
        <div className="t-headding">
            <span>Clients Always get</span>
            <span> Exceptional Work </span>
            <span>From me</span>
            <div className='blur t-blur1' style={{ background: "var(--purple)"}}></div>
            <div className='blur t-blur2' style={{ background: "skyblue"}}></div>
        </div>
        {/* Slider */}
            <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            pagination={{clickable: true}}
            grabCursor={true}
            >
                {clients.map((client, index)=> {
                  return(
                    <SwiperSlide key={index}>
                      <div className="testimonial"> 
                      <img src={client.img} alt="" />
                      <span>{client.review}</span>
                      </div>
                    </SwiperSlide>
                  )
                })}
            </Swiper>
    </div>
  )
}

export default Testimonials