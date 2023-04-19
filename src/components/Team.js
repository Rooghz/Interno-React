import React from 'react';
import Banner from './Props/Banner';
import Bi2 from '../Assets/Bi2.jpg';
import T1 from '../Assets/T1.jpg';
import T2 from '../Assets/T2.jpg';
import T3 from '../Assets/T3.jpg';
import T4 from '../Assets/T4.jpg';
import T5 from '../Assets/T5.jpg';
import T6 from '../Assets/T6.jpg';
import T7 from '../Assets/T7.jpg';
import T8 from '../Assets/T8.jpg';
import Card from './Props/Card';

function Team() {
    return (
        <div>
            <div >
                <Banner name="Our Professional" des="Home / Team" img={Bi2} />
            </div>
            <div className='flex flex-col prof'>
                <div>
                    <Card image={T1} />
                    <Card image={T2} />
                    <Card image={T4} />
                    <Card image={T3} />
                </div>
                <div>
                    <Card image={T5} />
                    <Card image={T6} />
                    <Card image={T7} />
                    <Card image={T8} />
                </div>
            </div>

        </div>
    );
}

export default Team;