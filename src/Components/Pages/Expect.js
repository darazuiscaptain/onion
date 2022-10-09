import React from 'react';
import restaurant from '../Images/Expect.png';
import one from '../Images/number/one.png'
import two from '../Images/number/two.png'
import three from '../Images/number/three.png'

const Expect = () => {
    return (
        <div className="hero bg-gray-50 lg:px-24 px-4">
            <div className="hero-content gap-6 flex-col lg:flex-row">
                <img src={restaurant} className="lg:max-w-lg max-w-[300px] rounded-lg" alt='' />
                <div>
                    <h1 className="text-4xl font-bold">We are doing more than you expect!!</h1>
                    <div className='mt-16 gap-6 flex'>
                        <div>
                            <img src={one} alt="" />
                        </div>
                        <div>
                            <h1 className='text-2xl font-bold'>We are located in the city center.</h1>
                            <p>Porro nemo veniam necessitatibus praesentium eligendi rem temporibus adipisci quo modi numquam.</p>
                        </div>
                    </div>
                    <div className='mt-8 gap-6 flex'>
                        <div>
                            <img src={two} alt="" />
                        </div>
                        <div>
                            <h1 className='text-2xl font-bold'>Fresh, Organic ingredients</h1>
                            <p>Consectetur numquam porro nemo veniam necessitatibus praesentium eligendi rem temporibus adipisci quo modi.</p>
                        </div>
                    </div>
                    <div className='mt-8 gap-6 flex'>
                        <div>
                            <img src={three} alt="" />
                        </div>
                        <div>
                            <h1 className='text-2xl font-bold'>Own Fast Delivery</h1>
                            <p>Necessitatibus praesentium eligendi rem temporibus adipisci quo modi. Lorem ipsum dolor sit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Expect;