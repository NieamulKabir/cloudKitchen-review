import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="hero min-h-[600px] my-4 rounded-xl " style={{ backgroundImage: `url("https://i.ibb.co/2W5LNP0/cloud-Kitchen.jpg")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello Foodies</h1>
                    <p className="mb-5">Order Your Favourite Food & Enjoy Your Food At Home.We will Deliver you fresh Testy Food</p>
                    <button className="btn bg-violet-600">
                        <Link to="/service">
                            Get Started
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;