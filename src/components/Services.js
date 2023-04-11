import React from 'react';
import Banner from './Props/Banner';
import Banner2 from '../Assets/Banner2.jpg';

function Services() {
    return (
        <div >
            <Banner name="Services" des="Home / Services" img={Banner2} />
        </div>
    );
}

export default Services;