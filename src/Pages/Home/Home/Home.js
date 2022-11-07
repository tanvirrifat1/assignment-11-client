import React from 'react';
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
        </div>
    );
};

export default Home;