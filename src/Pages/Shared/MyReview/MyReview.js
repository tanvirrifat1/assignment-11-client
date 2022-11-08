import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import MyReviewRow from './MyReviewRow';

const MyReview = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/review?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])
    return (
        <div >

            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <tbody>
                        {
                            reviews?.map(review => <MyReviewRow
                                key={review._id}
                                review={review}
                            ></MyReviewRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyReview;