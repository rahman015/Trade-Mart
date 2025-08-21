import React from 'react'
import Background from './Background/Background'
import Vision from './Vision and Mission/Vision'
import Grid from './Grid/Grid'
import Faqs from './Faqs/Faqs'
import Footer from './Footer/Footer'
import Testimonial from './About/Testimonials/Testimonial'

const Home = () => {
  return (
    <div>
        <Background/>
        <Vision/>
        <Grid/>
        <Testimonial/>
        <Faqs/>
        <Footer/>
    </div>
  )
}

export default Home
