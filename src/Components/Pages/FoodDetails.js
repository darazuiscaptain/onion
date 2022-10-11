import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FoodDetails = () => {
    const { id } = useParams();
    const [quantity, setQuantity] = useState(1);
    const [details, setDetails] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/food/${id}`)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [id, setDetails]);

    const handlePlus = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
    }

    const handleMinus = () => {
        const newQuantity = quantity - 1;
        if (quantity > 1) {
            setQuantity(newQuantity);
        }
    }


    return (
        <div className='lg:px-24 px-4 mt-10'>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-6 items-center'>
                <div>
                    <img className='rounded-lg' src={details.image} alt="Foods" />
                </div>
                <div>
                    <div className='flex bg-gray-100 justify-between items-center p-8'>
                        <h1 className='text-2xl font-bold'>{details.name}</h1>
                        <p className='bg-primary w-[100px] btn-animation text-center text-white font-bold text-2xl rounded'>${details.price}</p>
                    </div>
                    <p className='mt-4'>{details.discription}</p>
                    <p className='text-gray-500 font-bold mt-4'>Category: <span className='text-black'>{details.category}!</span></p>
                    <div className='mt-4 flex gap-6'>
                        <button onClick={handleMinus} className='bg-red-300 zoom px-4 py-2 rounded-md'><i className="fa-solid fa-minus text-white"></i></button>

                        <input className='w-[150px] h-[40px] text-center font-bold border-2 rounded-md border-gray-600' type="number" name="number" id="number" value={quantity} />

                        <button onClick={handlePlus} className='bg-red-300 zoom px-4 py-2 rounded-md'><i className="fa-solid fa-plus text-white"></i></button>
                    </div>
                    <div className='w-[345px] flex  mt-6'>
                        <button className='bg-primary rounded-md btn-animation px-6 py-2 text-white font-bold'>Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;