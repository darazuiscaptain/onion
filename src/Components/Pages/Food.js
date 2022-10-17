import React from 'react';
import { useNavigate } from 'react-router-dom';

const Food = ({ food }) => {

    const { image, name, price, _id } = food;
    const navigate = useNavigate();

    const handleDetails = (id) => {
        navigate(`/food/${id}`)
    }

    const handleCart = (food) => {
        const addCart = food;
        fetch('http://localhost:5000/addCart', {
            method: 'POST', 
            headers:{'content-type': 'application/json'},
            body: JSON.stringify(addCart)
        })
            .then(res => res.json())
            .then(data => {
                console.log('result', data);
            });
    }

    return (
        <div className="border p-1 rounded">
            <figure className='zoom'><img className='rounded' src={image} alt="" /></figure>
            <div className="p-2">
                <h2 className="font-bold text-xl">{name}</h2>
                <p>Price: <span className='bold'>${price}</span></p>
                <div className="flex justify-between mt-2">
                    <button onClick={()=>handleDetails(_id)} className="btn-animation bg-primary text-white px-4 rounded py-1">Details</button>
                    <button onClick={()=>handleCart(food)} className='btn-animation bg-primary text-white px-4 rounded py-1'>Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Food;