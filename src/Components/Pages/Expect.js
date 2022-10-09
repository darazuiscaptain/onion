import React from 'react';
import restaurant from '../Images/Expect.png';
import one from '../Images/number/one.png'
import two from '../Images/number/two.png'
import three from '../Images/number/three.png'

const Expect = () => {
    return (
            <div className='bg-gray-100 lg:h-screen lg:px-24 px-4 grid lg:grid-cols-2 grid-cols-1 items-center py-6 lg:mt-0 mt-10'>
                <div className='flex lg:justify-start justify-center'>
                    <img className='lg:w-[450px] w-[300px]' src={restaurant} alt="" />
                </div>
                <div className='lg:mt-0 mt-10'>
                    <h1 className="text-5xl font-bold">We are doing more than you expect!!</h1>
                    <div className='mt-16 gap-6 flex'>
                        <div>
                            <img className='' src={one} alt="" />
                        </div>
                        <div>
                            <h1 className='text-2xl font-bold'>We are located in the city center.</h1>
                            <p>Porro nemo veniam necessitatibus praesentium eligendi rem temporibus adipisci quo modi numquam.</p>
                        </div>
                    </div>
                    <div className='mt-8 gap-7 flex'>
                        <div>
                            <img className='' src={two} alt="" />
                        </div>
                        <div>
                            <h1 className='text-2xl font-bold'>Fresh, Organic ingredients</h1>
                            <p>Consectetur numquam porro nemo veniam necessitatibus praesentium eligendi rem temporibus adipisci quo modi.</p>
                        </div>
                    </div>
                    <div className='mt-8 gap-4 flex'>
                        <div>
                            <img className='' src={three} alt="" />
                        </div>
                        <div>
                            <h1 className='text-2xl font-bold'>Own Fast Delivery</h1>
                            <p>Necessitatibus praesentium eligendi rem temporibus adipisci quo modi. Lorem ipsum dolor sit.</p>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Expect;