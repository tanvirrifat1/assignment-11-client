import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Food from '../Foods/Food/Food';
import About from './About';
import Future from './Future';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Future></Future>
            <Food></Food>
            <div className='mt-5 flex justify-center p-4'>
                <Link to={'/getfood'}>
                    <button className="btn w-[250px] btn-outline btn-warning rounded-lg">See All</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;