import React from 'react'
import story from '../../../assets/story.png'
import './Story.css'

const Story = () => {
  return (
    <div className='story'>
    <div className='story-cont'>
      <h1>Our Story</h1>
      <p>
        Our journey began with a simple idea — to make quality
        products more accessible to everyone, no matter where they live. Frustrated by the high
        costs, limited options, and unreliable service in traditional retail, our founders saw an 
        opportunity to create a better shopping experience.
        Driven by a passion for technology and customer satisfaction,
        they launched our eCommerce platform with just a few products and a big dream: to build
        a trusted online destination where people can find everything they need — quickly, affordably,
        and conveniently.
      </p>
    </div>
    <img src={story} />
    </div>
  )
}

export default Story
