import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Service from './Service';
import Loading from '../../../Loading/Loading'

const Services = ({ datasize }) => {
    const [foodDetails, setFoodDetails] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const url = `https://cloudkitchen-v5ck.onrender.com/services${datasize ? `?datasize=${datasize}` : ''}`
        console.log(datasize);
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setFoodDetails(data);
                setLoading(false);
            })
            .catch((err) => {
                toast.error(err.message)
            })
    }, [datasize]);
    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className='text-center'>
                <h1 className='mt-10 text-3xl md:text-5xl font-bold text-violet-600'>Our Food Menu</h1>
                <p>Order Your Desire Food And enjoy it At home</p>
            </div>
            <div className='w-11/12 grid grid-cols-1 md:grid-cols-3 gap-10 mx-auto rounded-2xl pt-8 pb-16'>
                {
                    foodDetails &&
                    foodDetails?.map(service => <Service

                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;