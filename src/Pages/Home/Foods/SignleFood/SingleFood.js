import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleFood = () => {
    const { img, name, price, description } = useLoaderData()
    return (
        <div className='flex justify-center'>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className='card-title'>${price}</p>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleFood;