import React, { useEffect, useState } from 'react';
import FoodCard from './FoodCard';

const Food = () => {

    const [foods, setFoods] = useState([]);
    useEffect(() => {
        fetch('https://assignment-server-11.vercel.app/foods')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])
    return (
        <div className='container mx-auto'>
            <h2 className='text-5xl font-semibold text-center mb-4 '>Our Organic Food</h2>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                {
                    foods.map(food => <FoodCard
                        key={food._id}
                        food={food}
                    ></FoodCard>)
                }
            </div>
        </div>
    );
};

export default Food;