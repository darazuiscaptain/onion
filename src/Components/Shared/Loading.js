import React from 'react';
import { FidgetSpinner } from 'react-loader-spinner'

const Loading = () => {
    return (
        <div className='flex justify-center items-center h-[100vh]'>
            <FidgetSpinner
                visible={true}
                height="80"
                width="80"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
                ballColors={['#ff0000', '#00ff00', '#0000ff']}
                backgroundColor="#F4442E"
            />
        </div>
    );
};

export default Loading;