import React from 'react';

const Morning = ({ food }) => {
    const { image, name, description, price } = food;
    return (
        <div className='hover:rounded-lg hover:shadow-md hover:duration-500 text-center py-4 font-bold'>
            <div className='flex justify-center'>
                <img className='w-[170px]' src={image} alt="" />
            </div>
            <h1 className='mt-2'>{name}</h1>
            <p>${price}</p>
            <button className='bg-red-400 px-4 py-1 text-white rounded mt-2'>Details</button>
        </div>
    );
};

export default Morning;