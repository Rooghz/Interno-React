import React, { useState } from "react";
import "./Card.css";
import Fb from "../../Assets/fb.svg";
import Tw from "../../Assets/tw.svg";
import Ln from "../../Assets/ln.svg";
import Inst from "../../Assets/inst.svg";


const Card = ({ image, text }) => {
    const [hover, setHover] = useState(false);

    const handleHover = () => {
        setHover(!hover);
    };

    return (
        <div
            className="card-container"
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
        >
            <div className={`card ${hover ? "hover" : ""}`}>
                <div className="front">
                    <img src={image} alt="Card front" />
                </div>
                <div className="back flex flex-col gap-y-2">
                    <span>Nattasha Julie</span>
                    <p>Design, Australia</p>
                    <div className="flex gap-x-5 mt-8 mb-8">
                        <a href="https://facebook.com"><img src={Fb} alt="fb" /></a>
                        <a href="https://twitter.com"><img src={Tw} alt="Tw" /></a>
                        <a href="https://linkedin.com"><img src={Ln} alt="Ln" /></a>
                        <a href="https://instagram.com"><img src={Inst} alt="Inst" /></a>
                    </div>
                    <p>+1 (378) 400-1234 </p>
                    <p>julie@email.com</p>
                </div>
            </div>
        </div >
    );
};

export default Card;
