import { data } from 'autoprefixer';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const MyReviewRow = ({ review }) => {
    const { _id, customer, service, email, message, img } = review;
    const [reviewService, setReviewService] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/getfood/${service}`)
            .then(res => res.json())
            .then(data => setReviewService(data))
    }, [service])

    const handleDelete = id => {
        const proceed = window.confirm('Are You sure Delete Your Review');

        if (proceed) {
            fetch(`http://localhost:5000/review/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })
        }
    }


    return (
        <div className='flex justify-center sm:overflow-x-hidden'>
            <tr>
                <th>
                    <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-outline">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={img} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{customer}</div>
                            <div className="text-sm opacity-50">{message}</div>
                        </div>
                    </div>
                </td>
                <td>
                    {service}
                    <br />

                </td>
                <th>
                    <button className="btn btn-ghost btn-xs text-xl">Edit</button>
                </th>
            </tr>
        </div>
    );
};

export default MyReviewRow;