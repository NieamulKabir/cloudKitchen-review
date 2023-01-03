import React from 'react';
import { Link } from 'react-router-dom';


const Service = ({ service }) => {
    const { _id, foodName, price, img, food_details } = service;
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img src={img} className="w-[400px] h-[300px]" alt="foodItem" /></figure>
                <div className="card-body">
                    <h2 className="font-bold text-2xl text-violet-600">{foodName}</h2>
                    <p className='font-bold text-lg'><span className='text-2xl font-bold'>৳</span> {price} BDT</p>
                    <p>{food_details.slice(0, 100)}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/service/${_id}`}>
                            <button className="btn bg-violet-600 border-0 hover:bg-gray-500">Order Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;