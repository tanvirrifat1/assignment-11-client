import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../../../Hooks/usetitle';
import './AllFoodCard.css'

const AllfoodCard = ({ allFd }) => {
    useTitle('AllFood')
    const { _id, img, name, price, description } = allFd
    return (
        <div className='container mx-auto'>
            <div className="card card-compact gap-4 shadow-xl" data-aos="zoom-out" data-aos-duration="2000">
                <figure ><img className='size' src={img} alt="Shoes" /></figure>

                <div className="card-body">
                    <h2 className="card-title uppercase">food: {name}</h2>
                    <p className='card-title uppercase'>price: {price}$</p>
                    <p className='font-semibold text-start'>
                        {
                            description?.length > 100 ?
                                <>{description.slice(0, 100) + '.....'}  </>
                                :
                                description
                        }
                    </p>
                    <div className="card-actions w-full justify-end">
                        <Link to={`/singlefood/${_id}`}>
                            <button className="btn btn-outline btn-warning rounded-lg">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllfoodCard;