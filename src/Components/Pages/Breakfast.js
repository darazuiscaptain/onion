import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Morning from './Morning';

const Breakfast = () => {
    const { data: breakfast, isLoading } = useQuery('breakfast', () => fetch(`http://localhost:5000/breakfast`)
        .then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='py-8'>
            <div className='grid lg:grid-cols-3 grid-cols-1 mt-[32px] lg:gap-8 gap-6 lg:px-24 px-4'>
                {
                    breakfast?.map(food => <Morning
                        key={food._id}
                        food={food}>
                    </Morning>)
                }
            </div>
            <div className='flex justify-center mt-10'>
                <button className='bg-gray-200 font-bold rounded px-6 py-2 text-gray-700'>CheckOut Your Food</button>
            </div>
        </div>
    );
};

export default Breakfast;