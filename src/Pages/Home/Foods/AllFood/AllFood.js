import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../../context/AuthProvider/AuthProvider';
import AllfoodCard from '../AllFood/AllFoodCard';
import { Typewriter } from 'react-simple-typewriter';


const AllFood = () => {
    const { user, loading } = useContext(AuthContext)
    const [allfood, setAllFood] = useState([]);

    useEffect(() => {
        fetch('https://assignment-server-11.vercel.app/getfood')
            .then(res => res.json())
            .then(data => setAllFood(data))

    }, [])

    if (loading) {
        return <div className='flex justify-center'>
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
        </div>
    }

    return (
        <div className='text-center py-8 text-3xl'>
            <span className='text-violet-400 text-center text-bold mb-4 text-3xl'>
                <Typewriter
                    words={['Our Organic Food',]}
                    loop={5}
                    cursor
                    cursorStyle='_'
                    typeSpeed={60}
                    deleteSpeed={50}
                    delaySpeed={1000}
                />
            </span>
            <div className='container mx-auto mt-5'>
                <div className='grid gap-6 grid-cols-1  md:grid-cols-2 lg:grid-cols-3'>
                    {
                        allfood?.map(allFd => <AllfoodCard
                            key={allFd._id}
                            allFd={allFd}
                        ></AllfoodCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllFood;;