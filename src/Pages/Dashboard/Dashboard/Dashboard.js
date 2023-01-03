import React from 'react';
import Lottie from 'lottie-react'
import dashBoard from '../../../assets/lottie/dashboard.json'
const Dashboard = () => {
    return (
        <div>
            <h1 className='text-center mt-6 text-2xl md:text-4xl font-bold text-violet-600'>WellCome to DashBoad</h1>
            <div>
                <Lottie className='w-full md:h-[800px] mt-[-50px] md:mt-[-120px]'
                    animationData={dashBoard} loop={true}
                ></Lottie>
            </div>
        </div>
    );
};

export default Dashboard;