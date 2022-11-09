import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import useTitle from '../../../Hooks/usetitle';
import MyReviewRow from './MyReviewRow';



const MyReview = () => {
    useTitle('review')
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`https://assignment-server-11.vercel.app/review?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email]);


    const handleDelete = id => {
        const proceed = toast.warning('delete successfully', { autoClose: 1000 });

        if (proceed) {
            fetch(`https://assignment-server-11.vercel.app/review/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        const remaining = reviews.filter(rvw => rvw._id !== id);
                        setReviews(remaining);
                    }
                })
        }
    }

    const handleUpdate = id => {
        fetch(`https://assignment-server-11.vercel.app/review/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'update' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    const remaining = reviews.filter(odr => odr._id !== id)
                    const approving = reviews.find(odr => odr._id === id);
                    approving.status = 'updated'

                    const newReview = [approving, ...remaining];
                    setReviews(newReview)
                }
            })
    }

    return (
        <div>
            {
                reviews?.length > 0 ?
                    <h1 className='text-2xl text-center'>See Your All Reviews {reviews.length}</h1>
                    :
                    <h2 className='text-2xl text-center text-blue-600 font-bold'>No reviews Here added</h2>
            }
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <tbody>
                        {
                            reviews.map(review => <MyReviewRow
                                key={review._id}
                                review={review}
                                handleDelete={handleDelete}
                                handleUpdate={handleUpdate}
                            ></MyReviewRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyReview;
