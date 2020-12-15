import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import cartIcon from '../assets/cart.png';

function Nav() {
    return (
        <div className="Nav">
            <img src={logo} id="logo" alt="logo" />
            <div id="navLinks">
                <Link to="/">Home</Link>
                <Link to="/store">Store</Link>
                <Link to="/about-me">About Me</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/my-work">My Work</Link>
            </div>
            <img src={cartIcon} id="cartIcon" alt="cart" />
        </div>
    );
}

export default Nav;
