import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider';
import Loading from '../../Loading/Loading';

const AddService = () => {
    const { loading } = useContext(AuthContext)
    const handleAddService = e => {
        e.preventDefault();
        const form = e.target;
        const foodName = form.foodname.value;
        const price = form.price.value;
        const img = form.img.value;
        const food_details = form.details.value;

        const service = {
            foodName,
            price,
            img,
            food_details
        }
        console.log(service);
        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    form.reset();
                    toast.success("Service Added Successfully");
                }
            })
            .catch(er => {
                toast.error("Service Not Added");
            });

    }
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div className='max-w-screen-xl mx-auto '>
            <h1 className='text-3xl font-bold text-center mt-6 mb-2 text-violet-600'>Add New Food</h1>
            <div className='mx-auto flex items-center justify-center w-[60%]'>

                <form className='w-full flex-col items-center' onSubmit={handleAddService}>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Food Name</span>
                        </label>
                        <input name='foodname' type="text" placeholder="Type here" className="input input-bordered w-full " />

                        <label className="label">
                            <span className="label-text text-lg font-semibold">Price</span>
                        </label>
                        <input name='price' type="text" placeholder="Type here" className="input input-bordered w-full " />

                        <label className="label">
                            <span className="label-text text-lg font-semibold">Food Image Url</span>
                        </label>
                        <input name='img' type="text" placeholder="Type here" className="input input-bordered w-full" />

                        <label className="label">
                            <span className="label-text text-lg font-semibold">Food Details</span>
                        </label>
                        <input name='details' type="text" placeholder="Type here" className="input input-bordered w-full" />



                    </div>
                    <button className='btn bg-violet-500 border-0 hover:bg-gray-300 hover:text-black my-3' type="submit">
                        Add New Service
                    </button>
                </form>


            </div>
        </div>
    );
};

export default AddService;