import React from 'react';
import mobile from '../Images/Mobile.png';
import '../CSS/Mobile.css';
import google from '../Images/Google play.png';
import store from '../Images/App Store.png';

const Mobile = () => {
    return (
        <div className='bg-gray-50 pb-6 lg:px-24 px-4 grid lg:grid-cols-2 grid-cols-1 lg:gap-10 gap-6 items-center'>
            <div className='lg:-order-none order-6'>
                <h2 className='lg:text-6xl text-4xl font-bold text-[#131345]'>Download Our <br /> <span className='text-[#131345]'>Mobile App</span></h2>
                <p className='mt-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae modi, nam reiciendis vitae dolore consectetur, repellendus, fugiat excepturi dolor aperiam suscipit laboriosam quam quo rem.</p>
                <div className='mt-6 flex gap-x-6'>
                    <button><img className='w-[150px] h-[45px] rounded' src={google} alt="" /></button>
                    <button><img className='w-[150px] h-[45px] rounded' src={store} alt="" /></button>
                </div>
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