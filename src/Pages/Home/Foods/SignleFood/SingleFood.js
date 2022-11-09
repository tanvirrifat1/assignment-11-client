import React from 'react';
import { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../../context/AuthProvider/AuthProvider';
import useTitle from '../../../../Hooks/usetitle';
import ReviewItem from './Reviewitem/ReviewItem';

const SingleFood = () => {
    const { user } = useContext(AuthContext)
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
                <div className=' flex justify-center '>
                    {
                        user?.email ?
                            <ReviewItem></ReviewItem>

                            : <Link className='btn btn-outline btn-warning rounded-lg' to='/login'>Please LogIn</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default SingleFood;