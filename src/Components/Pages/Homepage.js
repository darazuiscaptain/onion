import React from 'react';
import '../CSS/Homepage.css'

const Homepage = () => {
    return (
        <div className='lg:px-24 px-4 bg h-[87vh] flex flex-col justify-center items-center'>
            <h1 className='text-5xl'>Best Food Waiting For Your Belly</h1>
            <div className='mt-4 flex lg:flex-row flex-col'>
                <input className='lg:w-[400px] w-[330px] h-[40px] rounded' type="text" placeholder=' Search Your Fav. Food' />
                <div className='flex justify-center'>
                    <button className='lg:mt-0 mt-4 lg:w-[100px] w-[150px] bg-red-500 px-6 py-2 rounded text-white'>Search</button>
                </div>
            </div>
        </div>
    );
};

export default Homepage;