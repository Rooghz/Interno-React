import React from 'react';
import Vector from '../../Assets/Vector.svg';

function Content(props) {
    return (
        <div>
            <span className='s-t'>{props.title}</span>
            <span className='s-p'>{props.description}</span>
            {props.hideButton !== true && (
                <button className='Button'>
                    <span>{props.name}</span>
                    <img src={Vector} alt="Button" />
                </button>
            )}
        </div>
    );
}


export default Content;