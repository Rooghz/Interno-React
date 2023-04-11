import React from 'react';
import Vector from '../../Assets/Vector.svg';

function Content(props) {
    return (
        <div>
            <span className={`s-t ${props.titleClass}`}>{props.title}</span>
            <span className={`s-p ${props.descriptionClass}`}>{props.description}</span>
            {
                props.hideButton !== true && (
                    <button className={`Button ${props.buttonClass}`}>
                        <span>{props.name}</span>
                        <img src={Vector} alt="Button" />
                    </button>
                )
            }
        </div >
    );
}


export default Content;