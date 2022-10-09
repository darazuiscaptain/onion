import React from 'react';
import { Outlet } from 'react-router-dom';
import Category from './Category';
import Expect from './Expect';
import Homepage from './Homepage';
import Mainfood from './Mainfood';
import WhyChoose from './WhyChoose';

const Home = () => {
    return (
        <div>
            <Homepage></Homepage>
            <Expect></Expect>
            <Category></Category>
            <Mainfood></Mainfood>
            <Outlet></Outlet>
            <WhyChoose></WhyChoose>
        </div>
    );
};

export default Home;