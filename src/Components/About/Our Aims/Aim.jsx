import React from 'react'
import micro from '../../../assets/microscope.png'
import mountain from '../../../assets/mountain.png'
import './Aim.css'

const Aim = () => {
  return (
    <div className='aim-container'>
    <h1>Our Missions and Vision</h1>
    <div className='aim'>
      <div className='aim-left'>
        <img src={mountain} />
        <h1>Mission</h1>
        <p>
        To provide a seamless and enjoyable online shopping experience
        by offering high-quality products, exceptional customer service,
        and fast, reliable delivery — all at competitive prices.</p>
      </div>
      <div className='aim-right'>
        <img src={micro} />
        <h1>Vision</h1>
        <p>
        To become a leading global eCommerce platform that connects
        people with the products they love, while setting new standards
        for innovation, convenience, and customer satisfaction.</p>
      </div>
    </div>
    </div>
  )
}

export default Aim
