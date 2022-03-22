import React from 'react';
import logo from '../images/Logo.svg'
import './Header.css'
const Header = () => {
    return (
        <div className='main-header'>
            <nav className='header-nav'>
                <img src={logo}alt="" />
                <div>
                    <a href="">Home</a>
                    <a href="">Order</a>
                    <a href="">Coustomar</a>
                    <a href="">About</a>
                </div>
            </nav>
            
        </div>
    );
};

export default Header;