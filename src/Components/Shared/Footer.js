import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Images/logo.png'

const Footer = () => {
    return (
        <div className='bg-gray-900 lg:px-24 px-4 py-8 '>
            <footer className="footer">
                <div className='text-white'>
                    <img src={logo} alt="" />
                    <p className='mt-6'>RED ONION Ltd.<br />Providing reliable tech since 2022</p>
                </div>
                <div className='text-white'>
                    <span className="footer-title">Services</span>
                    <Link to="/home" className="link link-hover">Branding</Link>
                    <Link to="/home" className="link link-hover">Design</Link>
                    <Link to="/home" className="link link-hover">Marketing</Link>
                    <Link to="/home" className="link link-hover">Advertisement</Link>
                </div>
                <div className='text-white'>
                    <span className="footer-title">Company</span>
                    <Link to="/home" className="link link-hover">About us</Link>
                    <Link to="/home" className="link link-hover">Contact</Link>
                    <Link to="/home" className="link link-hover">Jobs</Link>
                    <Link to="/home" className="link link-hover">Press kit</Link>
                </div>
                <div className='text-white'>
                    <span className="footer-title">Legal</span>
                    <Link to="/home" className="link link-hover">Terms of use</Link>
                    <Link to="/home" className="link link-hover">Privacy policy</Link>
                    <Link to="/home" className="link link-hover">Cookie policy</Link>
                </div>
            </footer>
            <div className='flex justify-center mt-8'>
                <small className='text-white text-center'>Copyright © 2022 - All right reserved by <span className='text-primary font-bold'>Afran_Rafi</span></small>
            </div>
        </div>
    );
};

export default Footer;