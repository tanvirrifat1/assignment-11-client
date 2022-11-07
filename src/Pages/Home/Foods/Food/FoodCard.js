import React from 'react';

const FoodCard = ({ food }) => {
    const { _id, img, name } = food;
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">See All</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
