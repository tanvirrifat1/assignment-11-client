import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../../../Hooks/usetitle';

const AllfoodCard = ({ allFd }) => {
    useTitle('AllFood')
    const { _id, img, name, price, description } = allFd
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>

                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className='card-title'>${price}</p>
                    <p>
                        {
                            description?.length > 100 ?
                                <>{description.slice(0, 100) + '.....'}  </>
                                :
                                description
                        }
                    </p>
                    <div className="card-actions justify-end">
                        <Link to={`/singlefood/${_id}`}>
                            <button className="btn btn-outline btn-warning rounded-lg">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllfoodCard;