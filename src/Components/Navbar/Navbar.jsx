import React from "react";
import logo3 from "../../assets/Logo3.png";
import logo4 from "../../assets/Logo4.png";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./Navbar.css";


const Navbar = () => {
  return (
    <nav className="nav-bar">
      <div className="logo"><a href=""><img src={logo3} /></a></div>
      <div className="logo4"><a href=""><img src={logo4} /></a></div>
      <ul className="Nav-links">
        <div className="center">
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Shops</a>
          </li>
          <li>
            <a href="">FAQs</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </div>
        <div className="right">
          <li>
            <a href=""><i class="bi bi-cart-fill"></i>Cart</a>
          </li>
          <li>
            <a href="">Sign <i class="bi bi-box-arrow-in-right"></i></a>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
