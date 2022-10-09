import React from 'react';
import { Outlet } from 'react-router-dom';
import Homepage from './Homepage';
import Mainfood from './Mainfood';
import WhyChoose from './WhyChoose';

const Home = () => {
    return (
        <div>
            <Homepage></Homepage>
            <Mainfood></Mainfood>
            <Outlet></Outlet>
            <WhyChoose></WhyChoose>
        </div>
    );
};

export default Home;