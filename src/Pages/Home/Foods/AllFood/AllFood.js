import React, { useEffect, useState } from 'react';
import AllfoodCard from '../AllFood/AllFoodCard';

const AllFood = () => {
    const [allfood, setAllFood] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/getfood')
            .then(res => res.json())
            .then(data => setAllFood(data))
    }, [])
    return (
        <div>
            <h2 className='text-5xl font-semibold text-center mb-4 '>Our Organic Food</h2>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-10'>
                {
                    allfood?.map(allFd => <AllfoodCard
                        key={allFd._id}
                        allFd={allFd}
                    ></AllfoodCard>)
                }
            </div>
        </div>
    );
};

export default AllFood;;