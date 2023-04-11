import React from 'react';
import Banner from './Props/Banner';
import banner from '../Assets/banner.jpg';

function Pages() {
    return (
        <div>
            <Banner name="Restricted Page" des="Home / Restricted Page" img={banner} />
        </div>
    );
}

export default Pages;
