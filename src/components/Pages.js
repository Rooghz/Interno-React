import React from 'react';
import { useState } from "react";
import Banner from './Props/Banner';
import banner from '../Assets/banner.jpg';
import Vector from '../Assets/Vector.svg';

function Pages() {
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission

        // Check if name contains any numbers
        const regexName = /^[0-9]*$/;
        if (!regexName.test(name)) {
            alert("Password can only contain numbers.");
            return;
        }

        e.target.reset();
        setName("");
    };
    return (
        <div>
            <Banner name="Restricted Page" des="Home / Restricted Page" img={banner} />
            <div className='P-Wrapper'>
                <div className='P-Wrapper-1'>
                    <div className='p-text'>
                        <span>
                            Password Protected
                        </span>
                        <p>
                            This page is password protected. If you are the website admin, or have access to this page, please type your password below.
                        </p>
                    </div>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-6 form-row">
                                <div className="form-row__item">
                                    <label className="block font-bold mb-2" htmlFor="name"></label>
                                    <input
                                        className=" appearance-none border-b-2 border-gray-400 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                                        id="password"
                                        type="password"
                                        placeholder="Password"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="flex justify-end mb-6">
                                <button className="contact-btn hover:bg-blue-700 flex gap-x-8" type="submit"><span>Submit Now</span><img src={Vector} alt="vector" /></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pages;
