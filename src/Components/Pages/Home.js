import React from 'react';
import Category from './Category';
import Chef from './Chef';
import Expect from './Expect';
import Foods from './Foods';
import Homepage from './Homepage';
import Mobile from './Mobile';
import WhyChoose from './WhyChoose';

const Home = () => {
    return (
        <div>
            <Homepage></Homepage>
            <Expect></Expect>
            <Category></Category>
            <Foods></Foods>
            <WhyChoose></WhyChoose>
            <Chef></Chef>
            <Mobile></Mobile>
        </div>
    );
};

export default Home;