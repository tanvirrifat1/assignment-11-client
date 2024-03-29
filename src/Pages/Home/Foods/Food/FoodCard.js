import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';
import './FoodCard.css'

const FoodCard = ({ food }) => {
    const { _id, img, name, price } = food;
    return (
        <div className='mx-auto container'>
            <div className="card card-compact w-96 bg-base-100 card-details shadow-xl">
                <PhotoProvider>
                    <PhotoView src={img}>
                        <figure><img src={img} alt="Shoes" /></figure>
                    </PhotoView>
                </PhotoProvider>
                <div className="card-body">
                    <h2 className="card-title uppercase">Food: {name}</h2>
                    <p className='card-title uppercase'>Price: {price}$</p>
                    <div className="card-actions ">
                        <Link to={`/singlefood/${_id}`}>
                            <button className="btn btn-outline w-full btn-warning rounded-lg">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
