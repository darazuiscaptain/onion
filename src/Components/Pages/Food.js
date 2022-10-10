import React from 'react';

const Food = ({ food }) => {
    const { image, name, price, _id } = food;
    return (
        <div className="border p-1 rounded">
            <figure><img className='rounded' src={image} alt="" /></figure>
            <div className="p-2">
                <h2 className="font-bold text-xl">{name}</h2>
                <p>Price: <span className='bold'>${price}</span></p>
                <div className="flex justify-between mt-2">
                    <button className="bg-primary text-white px-4 rounded py-1">Details</button>
                    <button className='bg-primary text-white px-4 rounded py-1'>Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Food;