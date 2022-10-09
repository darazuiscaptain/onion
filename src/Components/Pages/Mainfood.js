import React from 'react';
import CustomLink from '../Shared/CustomLink';

const Mainfood = () => {
    return (
        <div className='flex justify-center mt-10'>
            <ul className='flex gap-20'>
                <li className='font-bold'><CustomLink to="/home/breakfast">Breakfast</CustomLink></li>
                <li className='font-bold'><CustomLink to="/home/lunch">Lunch</CustomLink></li>
                <li className='font-bold'><CustomLink to="/home/dinner">Dinner</CustomLink></li>
            </ul>
        </div>
    );
};

export default Mainfood;