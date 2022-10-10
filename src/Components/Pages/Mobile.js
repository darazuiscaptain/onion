import React from 'react';
import mobile from '../Images/Mobile.png';

const Mobile = () => {
    return (
        <div className='bg-gray-50 pb-6 lg:px-24 px-4 grid lg:grid-cols-2 grid-cols-1 lg:gap-10 gap-6 items-center'>
            <div className='lg:-order-none order-6'>
                <h2 className='text-6xl font-bold text-[#131345]'>Download Our <br /> <span className='text-[#131345]'>Mobile App</span></h2>
                <p className='mt-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae modi, nam reiciendis vitae dolore consectetur, repellendus, fugiat excepturi dolor aperiam suscipit laboriosam quam quo rem.</p>
                <button className='bg-red-500 px-6 py-2 text-white rounded mt-4 font-bold'>Live Demo</button>
            </div>
            <div>
                <div className='flex lg:justify-end justify-center mt-6'>
                    <img className='rounded image-animate' src={mobile} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Mobile;