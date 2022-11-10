import React from 'react';

const Edit = () => {
    return (
        <div className='m-5 h-10'>
            <div>
                <input type="text" placeholder="Type here" className="input input-bordered input-error w-full max-w-xs" />

                <button className='btn btn-outline btn-success rounded-lg ml-5'>Click Here</button>
            </div>
        </div >
    );
};

export default Edit;