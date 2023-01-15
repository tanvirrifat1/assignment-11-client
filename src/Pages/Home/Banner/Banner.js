import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import img from '../../../assets/Sliders/sandwich.webp'

const Banner = () => {
    return (
        <div className='' data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-easing="ease-in-sine">
            <div
                style={{
                    backgroundColor: '#832561',
                }}
                className="hero p-16  text-white">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={img} className=" rounded-lg lg:w-1/2 shadow-2xl" alt='' />
                    <div>
                        <h1 className="text-5xl my-4 font-bold">About Fast Food!</h1>
                        <span className='text-blue-400 text-bold text-2xl mt-6'>
                            {/* Style will be inherited from the parent element */}
                            <Typewriter
                                words={['Fast food is a type of mass-produced food designed for commercial resale, with a strong priority placed on speed of service. It is a commercial term, limited to food sold in a restaurant or store with frozen, preheated or precooked ingredients and served in packaging for take-out/take-away. Fast food was created as a commercial strategy to accommodate large numbers of busy commuters, travelers and wage workers. In 2018, the fast food industry was worth an estimated $570 billion globally',]}
                                loop={5}
                                cursor
                                cursorStyle='_'
                                typeSpeed={60}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                        <div className="form-control">
                            <div className="input-group">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Banner;