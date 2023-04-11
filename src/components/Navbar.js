import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Assets/Logo.svg';
import Search from '../Assets/Search.svg';

function Navbar() {
    return (

        <div className="Header">

            <div className="Logo">
                <img src={Logo} alt="Logo" />
                <span>Interno</span>
            </div>


            <div className='Menubar'>
                <nav>
                    <Link className="nav-item" to="/">Home</Link>
                    <Link className="nav-item" to="/pages">Pages</Link>
                    <Link className="nav-item" to="/services">Services</Link>
                    <Link className="nav-item" to="/project">Project</Link>
                    <Link className="nav-item" to="/blog">Blog</Link>
                    <Link className="nav-item" to="/contact">Contact</Link>
                </nav>
                <img className="search" src={Search} alt="Logo" />
            </div>
        </div>
    );
}

export default Navbar;
