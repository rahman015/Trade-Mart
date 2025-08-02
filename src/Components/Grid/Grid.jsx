import React from 'react'
import Sign from "../../assets/Sign up.png"
import Search from "../../assets/search.png"
import Cart from "../../assets/cart2.png"
import './Grid.css'

const Grid = () => {
  return (
    <div className='grid-layer'>
        <div className='header'>
        <h1>How to get started</h1>
        <p>Easy steps to start using Trade Mart</p>
        </div>
        <div className='grids'>
            <div className='grid'>
                <img src={Sign} />
                <h2>Sign up or Login</h2>
                <p>Create an account using
                your email or social media,
                or log in if you already have
                one.</p>
            </div>
            <div className='grid'>
                <img src={Search} />
                <h2>Browse Products</h2>
                <p>Explore categories or use the 
                search bar to find what you 
                need.</p>
            </div>
            <div className='grid'>
                <img src={Cart} />
                <h2>Add to Cart & Checkout</h2>
                <p>Add items to your cart, then 
                proceed to payment and delivery
                details to complete your order.</p>
            </div>
        </div>
      
    </div>
  )
}

export default Grid
