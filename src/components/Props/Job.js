import React from 'react';

function Job(props) {
    return (
        <div className="Job-Section">
            <span className='job-first-text'>Wanna join the interno?</span>
            <p>It is a long established fact will be distracted.</p>
            <a href="/contact"><div className='jobs-btn'><span>Connect With Us</span><img src={props.img} alt="vector" /></div></a>
        </div>
    );
}

export default Job;