import React, { useEffect } from 'react';
import chef1 from '../Images/Chef/chef1.png'
import chef2 from '../Images/Chef/chef2.png'
import chef3 from '../Images/Chef/chef3.png'
import chef4 from '../Images/Chef/chef4.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Chef = () => {
    useEffect(() => {
        AOS.init({
            duration: 900,
        });
      }, []);
    return (
        <div className='lg:px-24 px-4 my-10'>
            <h1 className='text-4xl font-bold'  data-aos="fade-right">They will cook for you!</h1>
            <div className='flex justify-between items-center'>
                <p className='mt-4'  data-aos="fade-right">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, <br /> temporibus accusamus optio facere libero ducimus?</p>
                <button  data-aos="zoom-in-left" className='btn-animation bg-primary w-[150px] h-[40px] rounded text-white'>More About Us</button>
            </div>

            <div className='grid lg:grid-cols-4 grid-cols-1 gap-8 my-8'>
                <div className='text-center bg-gray-100 pb-4 rounded' data-aos="fade-up-right">
                    <div className='zoom'>
                        <img className='lg:h-[300px] w-full zoom-animation' src={chef1} alt="Chef1" />
                    </div>
                    <div>
                        <h1 className='text-xl font-bold mt-2'>Paul Trueman</h1>
                        <p className='text-gray-400 font-bold'>Head Chef</p>
                        <p className='flex justify-center gap-x-4 mt-2'><i className="fa-brands fa-twitter text-blue-500 cursor-pointer"></i> <i className="fa-brands fa-instagram text-pink-500 cursor-pointer"></i> <i className="fa-brands fa-facebook-f text-blue-500 cursor-pointer"></i> <i className="fa-brands fa-youtube text-red-500 cursor-pointer"></i></p>
                    </div>
                </div>
                <div className='text-center bg-gray-100 pb-4 rounded' data-aos="flip-up">
                    <div className='zoom'>
                        <img  className='lg:h-[300px] w-full' src={chef2} alt="Chef1" />
                    </div>
                    <div>
                        <h1 className='text-xl font-bold mt-2'>Emma Newman</h1>
                        <p className='text-gray-400 font-bold'>Assistant chef</p>
                        <p className='flex justify-center gap-x-4 mt-2'><i className="fa-brands fa-twitter text-blue-500 cursor-pointer"></i> <i className="fa-brands fa-instagram text-pink-500 cursor-pointer"></i> <i className="fa-brands fa-facebook-f text-blue-500 cursor-pointer"></i> <i className="fa-brands fa-youtube text-red-500 cursor-pointer"></i></p>
                    </div>
                </div>
                <div className='text-center bg-gray-100 pb-4 rounded' data-aos="flip-up">
                    <div className='zoom'>
                        <img className='lg:h-[300px] w-full' src={chef3} alt="Chef1" />
                    </div>
                    <div>
                        <h1 className='text-xl font-bold mt-2'>Oscar Oldman</h1>
                        <p className='text-gray-400 font-bold'>Chef</p>
                        <p className='flex justify-center gap-x-4 mt-2'><i className="fa-brands fa-twitter text-blue-500 cursor-pointer"></i> <i className="fa-brands fa-instagram text-pink-500 cursor-pointer"></i> <i className="fa-brands fa-facebook-f text-blue-500 cursor-pointer"></i> <i className="fa-brands fa-youtube text-red-500 cursor-pointer"></i></p>
                    </div>
                </div>
                <div className='text-center bg-gray-100 pb-4 rounded' data-aos="fade-up-left">
                    <div className='zoom'>
                        <img className='lg:h-[300px] w-full' src={chef4} alt="Chef1" />
                    </div>
                    <div>
                        <h1 className='text-xl font-bold mt-2'>Ed Freeman</h1>
                        <p className='text-gray-400 font-bold'>Assistant chef</p>
                        <p className='flex justify-center gap-x-4 mt-2'><i className="fa-brands fa-twitter text-blue-500 cursor-pointer"></i> <i className="fa-brands fa-instagram text-pink-500 cursor-pointer"></i> <i className="fa-brands fa-facebook-f text-blue-500 cursor-pointer"></i> <i className="fa-brands fa-youtube text-red-500 cursor-pointer"></i></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chef;