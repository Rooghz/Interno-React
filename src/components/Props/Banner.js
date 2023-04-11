import React from 'react';

function Banner(props) {
    return (
        <div className="Banner-Prop">
            <div><img src={props.img} alt="banner" /></div>
            <div className='Banner-wrap'>
                <span>{props.name}</span>
                <p>{props.des}</p>
            </div>
        </div>
    );
}

export default Banner;