import React from 'react';
import why1 from '../Images/why1.png';
import why2 from '../Images/why2.png';
import why3 from '../Images/why3.png';

const WhyChoose = () => {
    return (
        <div className='lg:px-24 px-4'>
            <h1>Why You Choose Us!</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem quos fuga, <br />
                et ab eveniet culpa ullam commodi hic, quidem, quisquam laudantium suscipit.</p>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Shoes!
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChoose;