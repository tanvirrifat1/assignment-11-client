import React from 'react';
import img1 from '../../../assets/Sliders/Burger.webp'
import { Typewriter } from 'react-simple-typewriter';

const Banner = () => {
    return (
        <div className='p-10' data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-easing="ease-in-sine">
            <div className="hero min-h-screen rounded-lg" style={{ backgroundImage: `url(${img1})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md mt-96">
                        <h1 className='text-4xl'>Hello There</h1>
                        <span className='text-violet-400 text-bold text-xl mt-6'>
                            <Typewriter
                                words={['Fast food is a type of mass-produced food designed for commercial resale, with a strong priority placed on speed of service. It is a commercial term, limited to food sold in a restaurant or store with frozen, preheated or precooked ingredients and served in packaging for take-out/take-away',]}
                                loop={5}
                                cursor
                                cursorStyle='_'
                                typeSpeed={60}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                        <p className="mb-5">.</p>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Banner;