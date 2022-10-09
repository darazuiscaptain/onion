import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CustomLink from './CustomLink';
import logo from '../Images/Red Onion Logo.png';

const Navbar = () => {
    let Links = [
        { name: "Food", link: "/food" },
        { name: "Gallery", link: "/gallery" },
        { name: "Blog", link: "/blog" },
        { name: "About", link: "/about" },
        { name: "Contact", link: "/contact" },
        // { name: "Dashboard", link: "/dashboard" },
    ];
    let [open, setOpen] = useState(false);
    return (
        <div className='sticky shadow-sm top-0 left-0 z-50 font-[Poppins] py-4 text-center lg:px-24 px-4 bg-white'>
            <div className='flex items-center justify-between'>
                <div className='cursor-pointer'>
                    <Link to="/home"><img src={logo} alt="" /></Link>
                </div>
                <div onClick={() => setOpen(!open)} className='text-2xl absolute right-6 top-6 cursor-pointer lg:hidden'>
                    <i className={`${open ? 'fa-solid fa-x' : 'fa-solid fa-bars'} text-gray-700`}></i>
                </div>
                <ul className={`lg:flex lg:items-center lg:pb-0 pb-8 absolute lg:static lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-7 transition-all duration-500 ease-in bg-white ${open ? 'top-16 opacity-100' : 'top-[-490px] opacity-0'} lg:opacity-100`}>
                    <div className="dropdown dropdown-end px-4">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-sm indicator-item bg-red-500 text-white border-none">0</span>
                            </div>
                        </label>
                        <div tabIndex={0} className="mt-4 card card-compact dropdown-content w-52 bg-base-100 shadow">
                            <div className="card-body">
                                <span className="font-bold text-lg">0 Items</span>
                                <span className="text-info">Subtotal: $999</span>
                                <div className="card-actions flex justify-center">
                                    <button className="bg-red-500 text-white font-bold px-6 py-2 rounded">View cart</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {
                        Links.map(link => <li
                            className='px-4 lg:my-0 my-5 text-black'
                            key={link.name}>
                            <CustomLink to={link.link}>{link.name}</CustomLink>
                        </li>)
                    }
                    <li className="px-4 lg:mt-0 mt-4"><Link to='/login' className='bg-red-500 text-white rounded-3xl py-2 px-6'>Login</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;