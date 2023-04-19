import React from 'react';
import { useState } from "react";
import Banner from './Props/Banner';
import Banner6 from '../Assets/Banner6.jpg';
import Pattern from '../Assets/Pattern.jpg';
import Pattern1 from '../Assets/Pattern1.jpg';
import Ai1 from '../Assets/ai1.jpg';
import Ai2 from '../Assets/ai2.jpg';
import T1 from '../Assets/T1.jpg';
import T2 from '../Assets/T2.jpg';
import T3 from '../Assets/T3.jpg';
import T4 from '../Assets/T4.jpg';
import Content from './Props/Content';
import Card from './Props/Card';
import Vector from '../Assets/Vector.svg';

function About() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission

        // Check if name contains any numbers
        const regexName = /^[a-zA-Z ]*$/;
        if (!regexName.test(name)) {
            alert("Name can only contain alphabets and spaces.");
            return;
        }

        e.target.reset();
        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <div>
            <div >
                <Banner name="About Us" des="Home / About Us" img={Banner6} />
            </div>

            <div className='About-s-1 flex' style={{ position: 'relative' }}>
                <img src={Pattern} alt="pattern" style={{ marginRight: '600px' }} />
                <div className='flex flex-col items-center gap-y-6 About-h justify-center' style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
                    <span>“</span>
                    <h3>I like an interior that defies labeling. I don't really want someone to walk into a room and know that I did it</h3>
                    <p>-BUNNY WILLIAMS</p>
                </div>
                <img src={Pattern1} alt="pattern1" />
            </div>

            <div className='About-s-2 gap-y-24'>
                <div className='flex gap-x-16'>
                    <Content
                        className="flex"
                        title="What We Do"
                        description="It is a long established fact that a reader will be distracted by the of readable content of a page 
                        when lookings at its layouts the points of using 
                        that it has a more-or-less normal."
                        descriptionClass="a-d-class"
                        name="Our Concept"
                        buttonClass="a-b-class"
                    />
                    <img src={Ai1} alt="about" />
                </div>
                <div className='flex gap-x-16'>
                    <img src={Ai2} alt="about" />
                    <Content
                        title="The End Result"
                        description="It is a long established fact that a reader will be distracted by the of readable content of a page 
                        when lookings at its layouts the points of using 
                        that it has a more-or-less normal."
                        descriptionClass="a-d-class"
                        name="Our Portfolio"
                        buttonClass="a-b-class"
                    />
                </div>
            </div>

            <div className='About-s-3'>
                <div className='a-s-3-text flex flex-col items-center'>
                    <span>What the People Thinks
                        About Us</span>
                    <div className='flex mt-20'>
                        <Card image={T1} />
                        <Card image={T2} />
                        <Card image={T4} />
                        <Card image={T3} />
                    </div>

                </div>
            </div>

            <div className='About-s-4 flex flex-col justify-center items-center'>
                <span>Creative project? Let's have
                    a productive talk.</span>
                <div className='mt-16 form-wid'>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-6 form-row">
                            <div className="form-row__item">
                                <label className="block font-bold mb-2" htmlFor="name"></label>
                                <input
                                    className="appearance-none border-b-2 border-gray-400 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                                    id="name"
                                    type="text"
                                    placeholder="Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="form-row__item ml-10">
                                <label className="block font-bold mb-2" htmlFor="email"></label>
                                <input
                                    className="appearance-none border-b-2 border-gray-400 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                                    id="email"
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="mb-6">
                            <label className="block font-bold mb-2" htmlFor="message"></label>
                            <textarea
                                className="appearance-none border-b-2 border-gray-400 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                                id="message"
                                rows="5"
                                placeholder="Hello I'm interested in.."
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                        </div>

                        <div className="flex justify-center mb-6">
                            <button className="contact-btn hover:bg-blue-700" type="submit"><span>Send Now</span><img src={Vector} alt="vector" /></button>
                        </div>

                    </form>
                </div>
            </div>

        </div>
    );
}

export default About;