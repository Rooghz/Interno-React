import React from 'react';
import Banner from './Props/Banner';
import Banner2 from '../Assets/Banner2.jpg';
import Section from './Props/Section';
import Service from './Props/Service';
import ServiceImg1 from '../Assets/service1.jpg';
import ServiceImg2 from '../Assets/ServiceImg2.jpg';
import ServiceImg3 from '../Assets/ServiceImg3.jpg';
import ServiceImg4 from '../Assets/ServiceImg2.jpg';
import s1 from '../Assets/s1.svg';
import s2 from '../Assets/s2.svg';
import s3 from '../Assets/s3.svg';
import s4 from '../Assets/s4.svg';
import Job from './Props/Job';
import Arrow from '../Assets/Arrow.svg'

function Services() {
    return (
        <div >
            <Banner name="Services" des="Home / Services" img={Banner2} />
            <div className='Section service-gap'>
                <Section
                    title="Project Plan"
                    description="There are many variations of the passages of lorem Ipsum from 
                    available, majority."
                    link="/services"
                />

                <Section
                    title="Interior Work"
                    description="There are many variations of the passages of lorem Ipsum from 
                    available, majority."
                    link="/services"
                />

                <Section
                    title="Realization"
                    description="There are many variations of the passages of lorem Ipsum from 
                    available, majority."
                    link="/services"
                />
            </div>
            <div className='Section service-gap'>
                <Section
                    title="2d/3d Art Work"
                    description="There are many variations of the passages of lorem Ipsum from 
                    available, majority."
                    link="/services"
                />

                <Section
                    title="Interior Work"
                    description="There are many variations of the passages of lorem Ipsum from 
                    available, majority."
                    link="/services"
                />

                <Section
                    title="Decoration Work"
                    description="There are many variations of the passages of lorem Ipsum from 
                    available, majority."
                    link="/services"
                />
            </div>
            <div className='Services-content'>
                <div className='Project-title'>
                    <span>
                        How We Work
                    </span>
                    <p>
                        It is a long established fact  will be distracted. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>
                <div className='work-sr'>
                    <Service
                        className="service-item"
                        img1={ServiceImg1}
                        img2={s1}
                        imgt="01"
                        title="Concept & Details"
                        des="It is a long established fact  will be distracted.
                        Lorem Ipsum is simply dummy from text of the
                        and typesetting indufstry."

                    />
                    <Service
                        className="service-item"
                        img1={ServiceImg2}
                        img2={s2}
                        imgt="02"
                        title="Idea for Work"
                        des="It is a long established fact  will be distracted.
                        Lorem Ipsum is simply dummy from text of the
                        and typesetting indufstry."

                    />
                    <Service
                        className="service-item"
                        img1={ServiceImg3}
                        img2={s3}
                        imgt="03"
                        title="Design"
                        des="It is a long established fact  will be distracted.
                        Lorem Ipsum is simply dummy from text of the
                        and typesetting indufstry."

                    />
                    <Service
                        className="service-item"
                        img1={ServiceImg4}
                        img2={s4}
                        imgt="04"
                        title="Perfection"
                        des="It is a long established fact  will be distracted.
                        Lorem Ipsum is simply dummy from text of the
                        and typesetting indufstry."

                    />
                </div>
            </div>
            <div className='Joinx'>
                <Job img={Arrow} />
            </div>
        </div>
    );
}

export default Services;