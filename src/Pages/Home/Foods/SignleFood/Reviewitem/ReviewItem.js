import React from 'react';
import { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../../../context/AuthProvider/AuthProvider';

const ReviewItem = () => {
    const { _id, price, description, img } = useLoaderData()
    const { user } = useContext(AuthContext)
    console.log(user)
    const handleReview = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = user?.email || 'unregistered';
        const img = user?.photoURL || 'unregistered';
        const message = form.message.value

        const review = {
            customer: name,
            email,
            img,
            message
        }

        fetch(`https://assignment-server-11.vercel.app/review`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Review successfully', { autoClose: 1000 })
                    form.reset()
                }
            })
            .catch(err => console.error(err))

    }

    return (
        <div className='flex justify-center'>
            <div className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 dark:bg-gray-900 dark:text-gray-100">
                <div className="flex flex-col items-center w-full">
                    <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
                        <div className="flex justify-between p-4">
                            <div className="flex space-x-4">
                                <div>
                                    {user?.photoURL ?
                                        <img className=' w-12 h-12 rounded-full dark:bg-gray-500'
                                            src={user?.photoURL}></img>
                                        : <></>
                                    }

                                </div>
                                <div>
                                    {
                                        user?.uid ?
                                            <>
                                                <span className='m-2'> {user?.displayName}</span>
                                            </>
                                            :
                                            <></>
                                    }
                                </div>
                            </div>

                        </div>
                        <div className="p-4 space-y-2 text-sm dark:text-gray-400">

                        </div>
                    </div>
                </div>
                <form onSubmit={handleReview}>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                        <input name='name' type="text" placeholder="Service name" className="input input-bordered text-black w-full" />
                        <input name='email' type="text" placeholder="Your Email" defaultValue={user?.email} className="input text-black input-bordered w-full" readOnly />
                    </div>
                    <div>
                        <textarea rows="3" name='message' placeholder="Message..." className="p-4 rounded-md text-black resize-none mt-5 "></textarea>
                        <br />
                        <input className='btn btn-warning' type="submit" value="Place Your Review" />
                    </div>
                </form>
            </div>

        </div>

    );
};

export default ReviewItem;