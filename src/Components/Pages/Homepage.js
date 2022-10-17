import React from 'react';
import girl from '../Images/girl.png';
import '../CSS/Homepage.css';

const Homepage = () => {
    return (
        <div className='lg:h-[87vh] lg:px-24 px-4 grid lg:grid-cols-2 grid-cols-1 items-center'>
            <div className='lg:-order-none order-4 duration-500' >
                <h5 className='text-xs text-primary font-bold animate__animated animate__fadeInLeft'>sale up to 20% off</h5>
                <h2 className='lg:text-7xl text-5xl animate__animated animate__fadeInLeft'>We do not cook, <br /> we create your <br /> emotions!</h2>
                <p className='mt-4 animate__animated animate__fadeInLeft'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, corrupti harum reprehenderit nulla est dicta asperiores saepe sint, dolore consequuntur earum nisi nam nostrum officiis.</p>
                <button className="animate__animated animate__fadeInLeft btn-animation bg-primary px-6 py-2 text-white mt-4 rounded-md font-bold">Shop Now</button>
            </div>
            <div>
                <div className='flex lg:justify-end justify-center animate__animated animate__fadeInRight'>  
                    <img className='lg:w-[450px] w-[300px] img-animation' src={girl} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Homepage;