import React from 'react'
import './Services.css'
import Glasses from '../../img/glasses.png'
import HeartEmoji from '../../img/heartemoji.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card'
import Resume from '../Resume/LionelGareca.pdf'
import { themeContext } from '../../Context'
import { useContext } from "react";
import { motion } from 'framer-motion'




const Services = () => {
  const transition = {duration : 1, type: 'spring'}
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode;
  return (
    <div className="services" id='Services'>
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
        <motion.div 
        whileInView={{left: '14rem'}}
        initial={{left: '25rem'}}
        transition={transition}
        style={{left: '18rem'}}>
        <Card
          emoji = {HeartEmoji}
          heading = {'Design'}
          detail = {"HTML, CSS, Boostrap, SASS"}
        />
        </motion.div>

        {/* Second Card */}
        <motion.div 
        style={{top: "12rem", left: "-5rem"}}
        whileInView={{left: '0rem'}}
        initial={{right: '-20rem'}}
        transition={transition}
        >
        
          <Card
              emoji={Glasses}
              heading={"Developer"}
              detail={"JavaScript & React"}
          />
          
        </motion.div>
        {/* Third Card */}
        <motion.div 
        whileInView={{left: '14rem'}}
        initial={{right: '20%'}}
        transition={transition}
        style={{top: "20rem", left: "14rem"}}
        >
          <Card
              emoji={Humble}
              heading={"UI/UX"}
              detail={"lorem ipsum lorem ipsum lorem ipsum lorem"}
          />
        </motion.div>
        <div className='blur s-blur2' style={{ background: "var(--purple)"}}>
          
        </div>
    </div>
</div>
  )
}

export default Services