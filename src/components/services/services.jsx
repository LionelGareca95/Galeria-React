import React from 'react'
import './Services.css'
import Glasses from '../../img/glasses.png'
import HeartEmoji from '../../img/heartemoji.png'
import Humble from '../../img/humble.png'

const Services = () => {
  return (
    <div className="services">
    {/* Left Side */}
    <div className="awesome">
      <span>My Awesome</span>
      <span>Services</span>
      <span> Commodi provident ea earum obcaecati, aliquam, id necessitatibus nihil et inventore distinctio iure fuga, unde veniam expedita sapiente quia quas quisquam eaque!</span>
      <br/>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      <button className='button s-button'>Download CV</button>
      <div className='blur s-blur' style={{ background: "#ABF1FF94" }}></div>
    </div>
    {/* Right Side */}
    <div className="cards">
      I am de Right Side
    </div>
</div>
  )
}

export default Services