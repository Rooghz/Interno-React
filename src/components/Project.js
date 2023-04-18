import React from 'react';
import Banner from './Props/Banner';
import Banner4 from '../Assets/Banner4.jpg';
import Proj1 from '../Assets/Proj1.jpg';
import Proj2 from '../Assets/Proj2.jpg';
import Proj3 from '../Assets/Proj3.jpg';
import Proj4 from '../Assets/Proj4.jpg';
import Proj5 from '../Assets/Proj5.jpg';
import Proj6 from '../Assets/Proj6.jpg';
import Proj7 from '../Assets/Proj7.jpg';
import Proj8 from '../Assets/Proj8.jpg';
import bt from '../Assets/bt.svg';
import Project from './Props/Project';
import Vector from '../Assets/bt.svg';

function Projects() {
    return (
        <div>
            <div >
                <Banner name="Project" des="Home / Project" img={Banner4} />
            </div>
            <div className='Project-sec'>
                <div className='Project-sec-1'>
                    <span>Bathroom</span>
                    <p className='p-s-1'>Bed Room</p>
                    <span>Kitchen</span>
                    <span>Living Area</span>
                </div>
                <div className='flex flex-wrap justify-between Project-sec-2'>
                    <div>
                        <Project image={Proj1} name="Modern Kitchen" description="Decor / Artchitecture" buttonText={bt} />
                        <Project image={Proj3} name="Modern Kitchen" description="Decor / Artchitecture" buttonText={bt} />
                        <Project image={Proj5} name="Modern Kitchen" description="Decor / Artchitecture" buttonText={bt} />
                        <Project image={Proj7} name="Modern Kitchen" description="Decor / Artchitecture" buttonText={bt} />
                    </div>
                    <div>
                        <Project image={Proj2} name="Modern Kitchen" description="Decor / Artchitecture" buttonText={bt} />
                        <Project image={Proj4} name="Modern Kitchen" description="Decor / Artchitecture" buttonText={bt} />
                        <Project image={Proj6} name="Modern Kitchen" description="Decor / Artchitecture" buttonText={bt} />
                        <Project image={Proj8} name="Modern Kitchen" description="Decor / Artchitecture" buttonText={bt} />
                    </div>
                </div>
                <div className='Project-sec-3'>
                    <div className='Project-sec-3-1'><span>01</span></div>
                    <div className='Project-sec-3-2'><span>02</span></div>
                    <div className='Project-sec-3-2'><span>03</span></div>
                    <div><img src={Vector} alt="bt" /></div>
                </div>

            </div>
        </div >
    );
}

export default Projects;