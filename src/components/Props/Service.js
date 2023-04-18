import React from 'react';


function Service(props) {
    return (
        <div className="Services-work">
            <div className='serv-img'>
                <img src={props.img1} alt="service" />
            </div>
            <div className='Services-cont'>
                <div className='ser-c-img'>
                    <img src={props.img2} alt="service" />
                    <span>{props.imgt}</span>
                </div>
                <div className='ser-c-t'>
                    <span>{props.title}</span>
                    <p>{props.des}</p>
                </div>
            </div>
        </div>
    );
}

export default Service;