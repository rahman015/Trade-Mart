import React from 'react'
import foo from '../../assets/foo-w.png'
import gtb from '../../assets/gtb.png'
import first from '../../assets/first-b.png'
import opay from '../../assets/opay.png'
import './Footer.css'

const Footer = () => {
  return (
    <div>
      <div className='hero'>
        <div className="hero-text">
          <div>
            <img src={foo} />
          </div>

          <div className='link'>
            <h3>Helpful Links</h3>
            <ul>
              <li><a href="">About Us</a></li>
              <li><a href="">Common Issues</a></li>
              <li><a href="">New Product</a></li>
              <li><a href="">Faqs</a></li>
              <li><a href="">Contact Us</a></li>
          </ul>
          </div>

          <div className='mid'>
            <h3>Supported payment Option</h3>
            <img src={gtb} />
            <img src={first} />
            <img src={opay} />
          </div>

          <div className='end'>
            <h4>Sign up to get the latest on sales, new  release on more..</h4>
            <input className='input-bar' placeholder='Enter your email' type="text" />
            <button>Enter</button>
            <p>In Colaboration with <strong>Bug- X Labs.</strong></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
