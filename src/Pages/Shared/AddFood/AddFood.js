import React from 'react';
import { toast } from 'react-toastify';
import useTitle from '../../../Hooks/usetitle';

const AddFood = () => {
    useTitle('AddFood')
    const handleForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.name.value;
        const foodPhoto = form.imgUrl.value;
        const description = form.description.value;
        const price = form.price.value;



        const service = {
            name: title,
            img: foodPhoto,
            description,
            price,

        }
        console.log(service)
        fetch(`https://assignment-server-11.vercel.app/getfood`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(service),
        })

            .then((response) => response.json())
            .then((data) => {
                if (data.insertedId) {
                    toast.success("Add New Product Successfully", { autoClose: 200 })
                }
                console.log('Success:', data);
                form.reset();
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }



    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className='p-6 bg-black text-white rounded-2xl'>
                            <form onSubmit={handleForm} >
                                <div className='gap-5'>
                                    <input type="text" name='name' placeholder="name" className="mt-2 bg-white text-black input input-ghost w-full  input-bordered" />
                                    <input type="text" name='price' placeholder="price" className="input  mt-2 bg-white text-black input-ghost w-full  input-bordered " />
                                    <input type="text" name='imgUrl' placeholder="img-url" className=" mt-2 bg-white text-black input input-ghost w-full  input-bordered " />
                                    <textarea type="text" name='description' placeholder="description" className="textarea text-black mt-2 bg-white  textarea-bordered  w-full" required></textarea>
                                </div>
                                <div className='flex justify-center m-4'>
                                    <button type='submit' className="btn btn-outline w-full btn-warning rounded-lg">Add Foods</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default AddFood;



