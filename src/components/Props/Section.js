import React from 'react';
import Vector from '../../Assets/Vector.svg';

function Section(props) {
    return (
        <div className="section">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <div className='home-section'>
                <a href={props.link}>Read More</a>
                <img src={Vector} alt="Button" />
            </div>
        </div>
    );
}

export default Section;
