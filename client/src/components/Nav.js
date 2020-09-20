import React from 'react';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
import logo from '../assets/logo.png';
import cartIcon from '../assets/cart.png';

const Nav = () => {
    return ( 
        <Router>
            <div className="Nav">
                <img src={logo} id="logo" alt="logo"/>
                <div id="navLinks">
                    <Link to="/">Home</Link>
                    <Link to="/shop">Shop</Link>
                    <Link to="/about-me">About Me</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/my-work">My Work</Link>
                </div>
                <img src={cartIcon} id="cartIcon" alt="cart"/>
            </div>
        </Router>
     );
}
 
export default Nav;
