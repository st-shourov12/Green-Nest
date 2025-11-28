import React from 'react';
import rrro from '../assets/error-404.png'

const Error = () => {
    return (
        <div className='w-full bg-green-100 h-auto mx-auto'>
            <figure className='flex p-5 sm:p-10 lg:p-20 justify-center'>
                <img src={rrro} alt="error" />
            </figure>
            
            
        </div>
    );
};

export default Error;