import React from 'react'
import './Navbar.css'
import Image7 from '../images/image7.png';

export const Navbar = () => {
    return (
        <div className='navbar-wraper'>
            <div className='navbar-logo' style={{ backgroundImage: `url(${Image7})` }}></div>
            <div className='navbar-home'>Home</div>
            <div>Auto Homepage</div>
            <div>Sales</div>
            <div>CRM</div>
            <div>Electronic office</div>
            <div>Cloud ERP</div>
            <div>SSL</div>
        </div>
    )
}
