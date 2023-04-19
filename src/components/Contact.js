import React from 'react';
import Banner from './Props/Banner';
import Banner1 from '../Assets/Banner1.jpg'
import { useState } from "react";
import sm1 from "../Assets/sm1.jpg";
import sm2 from "../Assets/sm2.jpg";
import sm3 from "../Assets/sm3.jpg";
import Fb from "../Assets/fb.svg";
import Tw from "../Assets/tw.svg";
import Ln from "../Assets/ln.svg";
import Inst from "../Assets/inst.svg";
import Vector from '../Assets/Vector.svg';
import Map from '../Assets/Map.jpg';

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [phone, setPhone] = useState("");
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

        // Check if phone number contains only numbers
        const regexPhone = /^[0-9]*$/;
        if (!regexPhone.test(phone)) {
            alert("Phone number can only contain numbers.");
            return;
        }

        e.target.reset();
        setName("");
        setEmail("");
        setSubject("");
        setPhone("");
        setMessage("");
    };

    return (

        <div >
            <Banner name="Contact Us" des="Home / Contact" img={Banner1} />
            <div className='c1'>
                <div className='c-letter'>
                    <span>
                        We love meeting new people and helping them.
                    </span>
                </div>
                <div className='flex flex-row mt-24 justify-center gap-x-14'>
                    <div className='flex flex-col form-social'>
                        <div className='flex flex-row justify-between items-center gap-x-4 s1'>
                            <img src={sm1} alt="sm1" />
                            <span>info@yourdomain.com</span>
                        </div>
                        <div className='flex flex-row justify-between items-center gap-x-4 s2'>
                            <img src={sm2} alt="sm2" />
                            <span>+1 (378) 400-1234</span>
                        </div>
                        <div className='flex flex-row justify-between items-center gap-x-4 s3'>
                            <img src={sm3} alt="sm3" />
                            <span>www.yourdomain.com</span>
                        </div>
                        <div className='flex flex-row justify-between items-center gap-x-4 mt-5 s4'>
                            <img src={Fb} alt="fb" />
                            <img src={Tw} alt="tw" />
                            <img src={Ln} alt="ln" />
                            <img src={Inst} alt="Inst" />
                        </div>
                    </div>
                    <div className='w-3/4'>
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
                                <div className="form-row__item">
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

                            <div className="mb-6 form-row">
                                <div className="form-row__item">
                                    <label className="block font-bold mb-2" htmlFor="subject"></label>
                                    <input
                                        className="appearance-none border-b-2 border-gray-400 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                                        id="subject"
                                        type="text"
                                        placeholder="Subject"
                                        value={subject}
                                        onChange={(e) => setSubject(e.target.value)}
                                    />
                                </div>
                                <div className="form-row__item">
                                    <label className="block font-bold mb-2" htmlFor="phone"></label>
                                    <input
                                        className="appearance-none border-b-2 border-gray-400 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                                        id="phone"
                                        type="tel"
                                        placeholder="Phone"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
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

                            <div className="flex justify-end mb-6 mt-6">
                                <button className="mt-6 contact-btn hover:bg-blue-700" type="submit"><span>Send Now</span><img src={Vector} alt="vector" /></button>
                            </div>

                        </form>
                    </div>
                </div >
            </div >
            <div className='Map'>
                <img src={Map} alt="Map" />
            </div>
        </div >
    );
}

export default Contact;
