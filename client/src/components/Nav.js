import React from 'react';
import logo from '../assets/logo.png';
import cartIcon from '../assets/cart.png';

const Nav = () => {
    return ( 
        <div className="Nav">
            <img src={logo} id="logo" alt="logo"/>
            <div id="navLinks">
                <a href="home">Home</a>
                <a href="shop">Shop</a>
                <a href="aboutme">About Me</a>
                <a href="contact">Contact</a>
                <a href="mywork">My Work</a>
            </div>
            <img src={cartIcon} id="cartIcon" alt="cart"/>
        </div>
     );
}
 
export default Nav;
