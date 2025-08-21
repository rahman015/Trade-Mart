import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo3 from "../../assets/Logo3.png";
import logo4 from "../../assets/Logo4.png";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./Navbar.css";


const Navbar = () => {
  return (
    <nav className="nav-bar">
      <div className="logo"><NavLink to="/home"><img src={logo3} /></NavLink></div>
      <div className="logo4"><NavLink to="/home"><img src={logo4} /></NavLink></div>
      <ul className="Nav-links">
        <div className="center">
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="">Shops</NavLink>
          </li>
          <li>
            <NavLink to="">FAQs</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </div>
        <div className="right">
          <li>
            <NavLink to=""><i className="bi bi-cart-fill"></i>Cart</NavLink>
          </li>
          <li>
            <NavLink to="/login">Sign <i className="bi bi-box-arrow-in-right"></i></NavLink>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
