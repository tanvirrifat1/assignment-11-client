import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../../Hooks/usetitle';
import ReviewItem from './Reviewitem/ReviewItem';

const SingleFood = () => {
    useTitle('SingleFood')
    const { img, name, price, description, _id } = useLoaderData()
    return (
        <div className='flex justify-center'>
            <div className="card card-compact  shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="text-3xl text-center">{name}</h2>
                    <p className='text-3xl text-center'>${price}</p>
                    <p>{description}</p>
                </div>
                <ReviewItem></ReviewItem>
            </div>
        </div>
    );
};

export default SingleFood;