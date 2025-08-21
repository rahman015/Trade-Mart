import React from 'react'
import face from '../../src/assets/dark-f.png'
import insta from '../../src/assets/id-dark.png'
import twitt from '../../src/assets/twitter.png'
import tiktok from '../../src/assets/tiktok.png'
import './Contact.css'
import Footer from './Footer/Footer'

const Contact = () => {
  return (
    <div>
    <div className='contact-hero'>
      <div className="gridss">
      <div className="grid-left">
        <p>Thank you for your interest in our company, if you want more update 
        on any new development fill out this form and comment about how
        our company has changed your life.</p>
        <p>Looking for support? <strong>Visit help & documentation</strong> </p>
        <h2>Location</h2>
        <p>Phase 1, Opposite Season 7, Beside Area 
        Council, Gwagwalada Abuja.</p>
        <h2>Follow us</h2>
        <div className="c-img">
          <img src={face} />
          <img src={insta} />
          <img src={twitt} />
          <img src={tiktok} />
        </div>
        <p><strong>@2025 Privacy Policy</strong></p>

      </div>
      <div>
        <form className="grid-right" action="https://formspree.io/f/mblkboek" method='POST'>
        <input type="text" name='Name' placeholder='Enter your name' required />
        <input type="email" name='Email' placeholder='Enter a valid email' required />
        <textarea name="Message" required rows="8" placeholder="Enter your message"></textarea>
        <button type='Submit'>Submit</button>
        </form>
      </div>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Contact
