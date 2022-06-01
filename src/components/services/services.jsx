import React from 'react'
import './Services.css'
import Glasses from '../../img/glasses.png'
import HeartEmoji from '../../img/heartemoji.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card'
import Resume from '../Resume/LionelGareca.pdf'
import { themeContext } from '../../Context'
import { useContext } from "react";




const Services = () => {
  
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode;
  return (
    <div className="services">
    {/* Left Side */}
    <div className="awesome">
      <span style={{color:darkMode? 'white' : ''}}>My Awesome</span>
      <span>Services</span>
      <span> Commodi provident ea earum obcaecati, aliquam, id necessitatibus
      <br/>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </span>
      <a href={Resume} download>
      <button className='button s-button'>Download CV</button>
      </a>
      
      <div className='blur s-blur' style={{ background: "#ABF1FF94" }}></div>
    </div>
    {/* Right Side */}
    <div className="cards">

          {/* First Card */}
        <div style={{left: '18rem'}}>
        <Card
          emoji = {HeartEmoji}
          heading = {'Design'}
          detail = {"HTML, CSS, Boostrap, SASS"}
        />
        </div>

        {/* Second Card */}
        <div style={{top: "12rem", left: "-5rem"}}>
          <Card
              emoji={Glasses}
              heading={"Developer"}
              detail={"JavaScript & React"}
          />

        </div>
        {/* Third Card */}
        <div style={{top: "20rem", left: "14rem"}}>
          <Card
              emoji={Humble}
              heading={"UI/UX"}
              detail={"lorem ipsum lorem ipsum lorem ipsum lorem"}
          />
        </div>
        <div className='blur s-blur2' style={{ background: "var(--purple)"}}>
          
        </div>
    </div>
</div>
  )
}

export default Services