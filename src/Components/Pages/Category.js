import React from 'react';
import started from '../Images/Category/Started.png';
import drinks from '../Images/Category/Drinks.png';
import dishes from '../Images/Category/Main Dishes.png';
import dessert from '../Images/Category/Dessert.png';

const Category = () => {
    return (
        <div className='lg:px-24 px-4 py-10'>
            <h1 className='text-4xl font-bold'>What do you like today?</h1>
            <div className='flex justify-between items-center'>
                <p className='mt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Itaque perspiciatis, rerum doloremque quibusdam <br /> deleniti beatae.</p>
                <button className='bg-primary w-[150px] h-[40px] rounded text-white btn-animation'>Go All Food</button>
            </div>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-6 mt-8'>
                <div className='flex gap-6 items-center  bg-gray-100 p-4 rounded'>
                    <div className='zoom'>
                        <img src={started} alt="" />
                    </div>
                    <div>
                        <h1 className='font-bold text-xl'>Starters</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, doloremque!</p>
                    </div>
                </div>
                <div className='flex gap-6 items-center bg-gray-100 p-4 rounded'>
                    <div className='zoom'>
                        <img src={dishes} alt="" />
                    </div>
                    <div>
                        <h1 className='font-bold text-xl'>Main Dishes</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, doloremque!</p>
                    </div>
                </div>
                <div className='flex gap-6 items-center bg-gray-100 p-4 rounded'>
                    <div className='zoom'>
                        <img src={drinks} alt="" />
                    </div>
                    <div>
                        <h1 className='font-bold text-xl'>Drinks</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, doloremque!</p>
                    </div>
                </div>
                <div className='flex gap-6 items-center bg-gray-100 p-4 rounded'>
                    <div className='zoom'>
                        <img src={dessert} alt="" />
                    </div>
                    <div>
                        <h1 className='font-bold text-xl'>Dessert</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, doloremque!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;