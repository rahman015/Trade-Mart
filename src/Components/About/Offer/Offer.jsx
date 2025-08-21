import React from 'react'
import Electronic from '../../../assets/Electronics.png'
import Fasion from '../../../assets/Fashion.png'
import Homes from '../../../assets/Homes.png'
import Beauty from '../../../assets/Beautycare.png'
import Groceries from '../../../assets/Groceries.png'
import Vehicle from '../../../assets/Vehicles.png'
import './Offer.css'

const Offer = () => {
  return (
    <div>
        <div className='offer-header'>
            <h1>What we offer</h1>
            <p>We offer a wide range of products to meet the everyday needs of our customers. Our categories include:</p>
        </div>
        <div className='offer'>
            <div className='offer-list'>
                <img src={Electronic} />
                <p>Electronics</p>
            </div>
            <div className='offer-list'>
                <img src={Fasion} />
                <p>Fashion</p>
            </div>
            <div className='offer-list'>
                <img src={Homes} />
                <p>Home & Living</p>
            </div>
            <div className='offer-list'>
                <img src={Beauty} />
                <p>Beauty & Personal Care</p>
            </div>
            <div className='offer-list'>
                <img src={Groceries} />
                <p>Groceries</p>
            </div>
            <div className='offer-list'>
                <img src={Vehicle} />
                <p>Vehicles</p>
            </div>
        </div>
    </div>
  )
}

export default Offer
