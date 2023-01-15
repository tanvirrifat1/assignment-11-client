import React from 'react';
import { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../../../context/AuthProvider/AuthProvider';

const ReviewItem = () => {

    const { user } = useContext(AuthContext)

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
                                        <img className=' w-16 h-16 rounded-full dark:bg-gray-500' alt=''
                                            src={user?.photoURL}></img>
                                        : <></>
                                    }

                                </div>
                                <div>
                                    {
                                        user?.uid ?
                                            <>
                                                <span className='m-2 text-xl'> {user?.displayName}</span>
                                            </>
                                            :
                                            <></>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <form onSubmit={handleReview} className='m-6'>
                    <div className=' gap-4'>
                        <input name="firstName" type="text" placeholder="First Name" className=" mt-2 bg-white text-black input input-ghost w-full  input-bordered" />
                        <input name="lastName" type="text" placeholder="Last Name" className="input  mt-2 bg-white text-black input-ghost w-full  input-bordered" />
                        <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className=" mt-2 bg-white text-black input input-ghost w-full  input-bordered" readOnly />
                    </div>
                    <textarea name='message' className="textarea text-black mt-2 bg-white  textarea-bordered h-24 w-full" placeholder="Your msg" required></textarea>
                    <input className='btn  mt-2 bg-white w-full text-black btn-outline btn-info rounded-lg' type="submit" value="Place your order" />
                </form>
            </div>

        </div>

    );
};

export default ReviewItem;