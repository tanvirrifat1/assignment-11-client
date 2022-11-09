import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const MyReviewRow = ({ review, handleDelete }) => {
    const { _id, customer, service, email, img, message } = review;
    const [reviewService, setReviewService] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/review/${service}`)
            .then(res => res.json())
            .then(data => setReviewService(data))
    }, [service])



    return (
        <div className='flex justify-center'>
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
                            {/* <div className="mask mask-squircle w-12 h-12">
                                {
                                    reviewService?.img &&
                                    <img src={reviewService.img} alt="Avatar Tailwind CSS Component" />}
                            </div> */}
                        </div>
                        <div>
                            <div className="font-bold">{customer}</div>
                            <div className="text-sm opacity-50">{message}</div>
                        </div>
                    </div>
                </td>

                <th>
                    <div>
                        <label htmlFor="my-modal-3" className="btn">Edit</label>
                        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                        <div className="modal">
                            <div className="modal-box relative">
                                <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
                                <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                            </div>
                        </div>
                    </div>
                </th>
            </tr>
        </div>
    );
};

export default MyReviewRow;