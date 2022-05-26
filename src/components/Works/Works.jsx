import React from 'react'
import './Works.css'
import Upwork from '../../img/Upwork.png'
import Fiverr from '../../img/fiverr.png'
import Amazon from '../../img/amazon.png'
import Shopify from '../../img/Shopify.png'
import Facebook from '../../img/Facebook.png'

const Works = () => {
  return (
<div className="works">
         {/* Left Side */}
    <div className="awesome">
      <span>Works for All These</span>
      <span>Brands & Clients</span>
      <span> Commodi provident ea earum obcaecati, aliquam, id necessitatibus
      <br/>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      <br/>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      <br/>
      </span>
      <button className='button s-button'>Hire Me</button>

      <div className='blur s-blur' style={{ background: "#ABF1FF94" }}></div>
    </div>
     {/* Right Side */}
     <div className="w-right">
         <div className="w-mainCircle">
             <div className="w-secCircle">
                 <img src={Upwork} alt="" />
             </div>
             <div className="w-secCircle">
                 <img src={Fiverr} alt="" />
             </div>
             <div className="w-secCircle">
                 <img src={Amazon} alt="" />
             </div>
             <div className="w-secCircle">
                 <img src={Shopify} alt="" />
             </div>
             <div className="w-secCircle">
                 <img src={Facebook} alt="" />
             </div>
        </div>  
         {/*Background Circles*/}
         <div className='w-backCircle blueCircle'></div>
         <div className='w-backCircle yellowCircle'></div>
     </div>
</div>
  )
}

export default Works