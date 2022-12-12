import React from 'react';

const About = () => {
    return (
        <div className="hero my-20">
            <div className="hero-content flex-col lg:flex-row">
                <div className='relative lg:w-1/2'>
                    <img src="https://images.unsplash.com/photo-1474225183201-99971f7495cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" className="w-4/5 h-full rounded-lg shadow-2xl" />
                    <img src="https://images.unsplash.com/photo-1505872342847-6dbb5e76cd31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" className="absolute right-5 top-1/2 w-3/5 border-8 rounded-lg shadow-2xl" />
                </div>
                <div className='w-1/2'>
                    <p className="text-2xl font-bold text-orange-600">About apples</p>
                    <h1 className="my-5 text-5xl font-bold">
                        Apples are a popular fruit. They contain antioxidants, vitamins, dietary fiber.</h1>
                    <p className="py-6">Apples come in a variety of shapes, colors, and flavors. They provide a range of nutrients that can benefit many aspects of a person’s health. </p>
                    <p className="py-6">Eating a diet rich in a variety of fruits and vegetables, including apples, may help reduce the risk of several conditions, </p>
                    <button className="btn btn-primary">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;