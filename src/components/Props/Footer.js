import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../Assets/Logo.svg";
import Fb from "../../Assets/fb.svg";
import Tw from "../../Assets/tw.svg";
import Ln from "../../Assets/ln.svg";
import Inst from "../../Assets/inst.svg";


function Footer(props) {
    return (
        <div>
            <div className="Footer-Section">
                <div className='Footer-first'>
                    <div className="Logo">
                        <img src={Logo} alt="Logo" />
                        <span>Interno</span>
                    </div>
                    <div className='footer-des'>
                        <span>
                            It is a long established fact that a reader will be distracted lookings.
                        </span>
                    </div>
                    <div className='social'>
                        <a href="https://facebook.com"><img src={Fb} alt="fb" /></a>
                        <a href="https://twitter.com"><img src={Tw} alt="Tw" /></a>
                        <a href="https://linkedin.com"><img src={Ln} alt="Ln" /></a>
                        <a href="https://instagram.com"><img src={Inst} alt="Inst" /></a>
                    </div>
                </div >
                <div className='Footer-Second'>
                    <span>Pages</span>
                    <Link to="/about"><p>About Us</p></Link>
                    <Link to="/project"><p>Our Projects</p></Link>
                    <Link to="/team"><p>Our Team</p></Link>
                    <Link to="/contact"><p>Contact Us</p></Link>
                    <Link to="/services"><p>Services</p></Link>
                </div>
                <div className='Footer-Second'>
                    <span>Services</span>
                    <Link to="/services"><p>Kitchen</p></Link>
                    <Link to="/services"> <p>Living Area</p></Link>
                    <Link to="/services"><p>Bathroom</p></Link>
                    <Link to="/services"> <p>Dinning Hall</p></Link>
                    <Link to="/services"> <p>Bedroom</p></Link>
                </div>
                <div className='Footer-Second'>
                    <span>Contact</span>
                    <p>55 East Birchwood Ave. Brooklyn, New York 11201</p>
                    <p>contact@interno.com</p>
                    <p>(123) 456 - 7890</p>
                </div>
            </div >
            <div>
                <span className='copyright'>Copyright © Interno | Designed by Victorflow Templates - Powered by Webflow</span>
            </div>
        </div >
    );
}

export default Footer;