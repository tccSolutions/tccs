import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.styles.scss'

export const Navbar=()=>(
    <div className='navbar'>
        <div className="brand">
            <h3>TCCS.TECH</h3>
        </div>
        <div className='links'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About Us</Link>
            <Link to='/contactus'>Contact Us</Link>
            <Link to='/reviews'>Reviews</Link>
        </div>        
    </div>
)