import React from 'react';
import Background from '../Assets/Background.jpg';
import Callicon from '../Assets/Call Icon.svg';
import Section from './Props/Section.js';
import Content from './Props/Content.js';

function Home() {
    return (
        <div className='Home'>
            <div className='Banner'>
                <div className='img'>
                    <img src={Background} alt="Background" />
                </div>
                <div className='content'>
                    <Content
                        title="Let Your Home Be Unique"
                        description="There are many variations of the passages of lorem Ipsum fromavailable, majority."
                        name="Get Started"
                    />
                </div>
            </div>
            <div className='Section'>
                <Section
                    title="Project Plan"
                    description="There are many variations of the passages of lorem Ipsum from 
                    available, majority."
                    link="/section1"
                />

                <Section
                    title="Interior Work"
                    description="There are many variations of the passages of lorem Ipsum from 
                    available, majority."
                    link="/section2"
                />

                <Section
                    title="Realization"
                    description="There are many variations of the passages of lorem Ipsum from 
                    available, majority."
                    link="/section3"
                />
            </div>
            <div className='About'>
                <div>
                    <Content
                        title="We Create The Art Of Stylish Living Stylishly"
                        description="It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using that it has a more-or-less normal."
                        hideButton={true}
                    />
                    <div className='about-call'>
                        <img src={Callicon} alt="Call Icon" />
                        <div className='about-text'>
                            <span>012345678</span>
                            <span>Call Us Anytime</span>
                        </div>
                    </div>
                    <Content name="Get Free Estimate" />
                </div>
            </div>

        </div >
    );
}

export default Home;
