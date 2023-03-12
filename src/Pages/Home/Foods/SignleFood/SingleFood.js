import React from 'react';
import { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../../context/AuthProvider/AuthProvider';
import useTitle from '../../../../Hooks/usetitle';
import ReviewItem from './Reviewitem/ReviewItem';
import { Typewriter } from 'react-simple-typewriter';


const SingleFood = () => {
    const { user } = useContext(AuthContext)
    useTitle('SingleFood')
    const { img, name, price, description, } = useLoaderData()
    return (
        <div className='flex justify-center' data-aos="fade-up"
            data-aos-duration="3000">
            <div className='container mx-auto'>
                <div className="card card-compact mt-10 shadow-xl">
                    <figure ><img className='h-72 w-72' src={img} alt="Shoes" /></figure>
                    <div className="card-body ">
                        <span className='text-violet-400 text-center text-bold text-4xl mt-6'>
                            <Typewriter
                                words={[`${name}`,]}
                                loop={5}
                                cursor
                                cursorStyle='_'
                                typeSpeed={60}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                        <p className='text-3xl text-center'>${price}</p>
                        <p>{description}</p>
                    </div>
                    <div className=' flex justify-center my-4'>
                        {
                            user?.email ?
                                <ReviewItem></ReviewItem>
                                : <Link className='btn btn-outline btn-warning rounded-lg' to='/login'>Please LogIn</Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleFood;