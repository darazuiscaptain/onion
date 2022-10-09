import React from 'react';
import why1 from '../Images/why1.png';
import why2 from '../Images/why2.png';
import why3 from '../Images/why3.png';

const WhyChoose = () => {
    return (
        <div className='lg:px-24 px-4 mt-10'>
            <h1 className='text-4xl font-bold'>Why You Choose Us!</h1>
            <p className='mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem quos fuga, <br />
                et ab eveniet culpa ullam commodi hic, quidem, quisquam laudantium suscipit.</p>
            <div className='grid lg:grid-cols-3 grid-cols-1 my-8 gap-6'>
                <div className="card bg-base-100 shadow-md">
                    <img src={why1} alt="Home Delivery" />
                    <div className="card-body">
                        <h2 className="card-title">
                            <span className='bg-primary rounded-full p-2 text-white'>
                                <i className="fa-solid fa-car"></i>
                            </span>
                            <div className="font-bold text-[17px]">Fast delivery</div>
                        </h2>
                        <div>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <button className='text-blue-600 font-bold'>See more <i className="fa-solid fa-circle-arrow-right text-xs text-green-600"></i></button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-md">
                    <img src={why2} alt="Home Delivery" />
                    <div className="card-body">
                        <h2 className="card-title">
                            <span className='bg-primary rounded-full p-2 text-white'>
                                <i className="fa-solid fa-bell"></i>
                            </span>
                            <div className="font-bold text-[17px]">A Good Auto Responder</div>
                        </h2>
                        <div>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <button className='text-blue-600 font-bold'>See more <i className="fa-solid fa-circle-arrow-right text-xs text-green-600"></i></button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-md">
                    <img src={why3} alt="Home Delivery" />
                    <div className="card-body">
                        <h2 className="card-title">
                            <span className='bg-primary rounded-full p-2 text-white'>
                                <i className="fa-solid fa-truck-moving"></i>
                            </span>
                            <div className="font-bold text-[17px]">Home delivery</div>
                        </h2>
                        <div>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <button className='text-blue-600 font-bold'>See more <i className="fa-solid fa-circle-arrow-right text-xs text-green-600"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChoose;