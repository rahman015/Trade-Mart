import React from 'react'
import profile1 from '../../../assets/profile-4.png'
import profile from '../../../assets/profile.png'
import profile3 from '../../../assets/profile-3.png'
import review from '../../../assets/review.png'
import './Testimonial.css'

const Testimonial = () => {
  return (
    <div className='tes-container'>
        <h1>Customers Testimonal</h1>
        <div className="testimonials">
            <div className="testimonial testimonial-1">
                <div className="profile">
                    <img src={profile1} />
                    <div className='name'>
                        <h3>Usman Abubakar</h3>
                        <p>3 days ago</p>
                    </div>
                </div>
                <img className='star' src={review} />
                <p>I think the website is good and efficient for 
                your business, and also its free to use and a
                convenient secure app.</p>
            </div>

            <div className="testimonial">
                <div className="profile">
                    <img src={profile3} />
                    <div className='name'>
                        <h3>Abdullahi Suleiman</h3>
                        <p>1 day ago</p>
                    </div>
                </div>
                <img className='star' src={review} />
                <p>Great.</p>
            </div>

            <div className="testimonial testimonial-3">
                <div className="profile">
                    <img src={profile} />
                    <div className='name'>
                        <h3>Khalipha Murtala</h3>
                        <p>5 days ago</p>
                    </div>
                </div>
                <img className='star' src={review} />
                <p>I think the website is good and useful to use, and try.</p>
            </div>
        </div>
    </div>
  )
}

export default Testimonial
