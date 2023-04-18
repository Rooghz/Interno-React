import React from 'react';
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
                    <p>About Us</p>
                    <p>Our Projects</p>
                    <p>Our Team</p>
                    <p>Contact Us</p>
                    <p>Services</p>
                </div>
                <div className='Footer-Second'>
                    <span>Services</span>
                    <p>Kitchen</p>
                    <p>Living Area</p>
                    <p>Bathroom</p>
                    <p>Dinning Hall</p>
                    <p>Bedroom</p>
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