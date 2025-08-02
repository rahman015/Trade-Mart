import React from 'react'
import vision from '../../assets/background2.png'
import './Vision.css'

const Vision = () => {
  return (
    <div className='vision'>
      <div className='left'>
        <p> <strong>Enhance Customer Experience. </strong>
        Grow customer base through digital marketing and global 
        shipping, and Maintain high standards for all listed products,
        Grow customer base through digital marketing and global 
        so that is how goal of this company is.</p>
      </div>
      <div className='rights'>
        <img src={vision} />
      </div>
    </div>
  )
}

export default Vision
