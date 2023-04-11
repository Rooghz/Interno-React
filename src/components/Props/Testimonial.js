import React from 'react';

function Testimonial(props) {
    return (
        <div className='testi-prop'>
            <div className='testi-prop-imcon'>
                <div className='testi-prop-img'>
                    <img src={props.src} alt={props.alt} />
                </div>
                <div className='testi-prop-cont'>
                    <span>{props.title}</span>
                    <p>{props.text}</p>
                </div>
            </div >
            <div className='testi-prop-des'>
                <span>{props.description}</span>
            </div>
        </div >
    );
}


export default Testimonial;