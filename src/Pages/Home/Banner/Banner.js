import React from 'react';
import img1 from '../../../assets/Sliders/Burger.webp'

const Banner = () => {
    return (
        <div className='p-10 '>
            <div className="hero min-h-screen rounded-lg" style={{ backgroundImage: `url(${img1})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md mt-96">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">Fast food is a type of mass-produced food designed for commercial resale, with a strong priority placed on speed of service. It is a commercial term, limited to food sold in a restaurant or store with frozen, preheated or precooked ingredients and served in packaging for take-out/take-away.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;