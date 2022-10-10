import React from 'react';
import Category from './Category';
import Chef from './Chef';
import Expect from './Expect';
import Homepage from './Homepage';
import Mobile from './Mobile';
import WhyChoose from './WhyChoose';

const Home = () => {
    return (
        <div>
            <Homepage></Homepage>
            <Expect></Expect>
            <Category></Category>
            <Chef></Chef>
            <WhyChoose></WhyChoose>
            <Mobile></Mobile>
        </div>
    );
};

export default Home;