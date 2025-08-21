import React, { useState, useEffect } from 'react';
import './Background.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

// Import images
import bg1 from '../../assets/background.png';
import bg2 from '../../assets/build.png';
import bg3 from '../../assets/urban.png';
import { NavLink } from 'react-router-dom';

const Background = () => {
  const images = [bg1, bg2, bg3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // change every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className="back-ground"
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
    >
      <div className="back-text">
        <h1>Connecting Quality with Convenience</h1>
        <p>
          We are a dynamic <strong>E-Commerce</strong> company dedicated to delivering
          high-quality products with a seamless online shopping experience,
          vision and objectives of our digital retail journey to grow customer
          base through digital marketing.
        </p>
        <button>
          <NavLink to="/products">
            Get Started Now <i className="bi bi-arrow-right"></i>
          </NavLink>
        </button>
        <p>
          In Collaboration with approximately <strong>+20</strong> different countries around
          <strong> Africa.</strong>
        </p>
      </div>
    </div>
  );
};

export default Background;
