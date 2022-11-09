import React from 'react';
import { toast } from 'react-toastify';
import useTitle from '../../../Hooks/usetitle';

const AddFood = () => {
    useTitle('AddFood')
    // const { img, name, price, description, _id } = useLoaderData()
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
        fetch(`http://localhost:5000/getfood`, {
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
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }



    return (
        <div>
            <form onSubmit={handleForm} >
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 m-10'>
                    <input type="text" name='name' placeholder="name" className="input input-bordered input-primary   rounded-lg" />
                    <input type="text" name='price' placeholder="price" className="input input-bordered input-primary rounded-lg  " />
                    <input type="text" name='imgUrl' placeholder="img-url" className="input input-bordered input-primary rounded-lg  " />
                    <input type="text" name='description' placeholder="description" className="input input-bordered input-primary rounded-lg " />
                </div>
                <div className='flex justify-center m-4'>
                    <button type='submit' className="btn btn-outline btn-warning rounded-lg">Add Foods</button>
                </div>
            </form>
        </div >
    );
};

export default AddFood;