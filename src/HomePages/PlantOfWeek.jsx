import React from 'react';
import usePlant from '../usePlant';
import { FaStar } from 'react-icons/fa6';

const PlantOfWeek = () => {
    const {plants} = usePlant();
    const bestPlant = plants.find(p=>Number(p?.rating) === Number(4.9))
    return (
        <div className="w-full mx-auto bg-emerald-600">

            <div className='py-10 sm:py-20 w-11/12 mx-auto '>
                <h2 className='text-xl md:text-3xl font-bold text-center mb-5 text-white '>
                    Plant Of The Week
                </h2>

                <div className="flex flex-col md:flex-row justify-between items-center gap-5">
                    <figure className='md:w-1/2'>
                        <img
                        src={bestPlant?.image}
                        alt="Movie"
                        className='w-[300px] h-[300px] lg:w-[700px] lg:h-[500px] rounded-xl j' />
                    </figure>
                    <div className="flex md:w-1/2 flex-col items-center md:items-start gap-4 ">
                        <h2 className="text-2xl lg:text-3xl text-gray-200 font-bold">{bestPlant?.name}</h2>
                        <p className='text-lg lg:text-xl text-gray-200 text-center  md:text-start'>{bestPlant?.description}</p>
                        <span className='flex gap-2 text-xl font-semibold bg-white px-3 py-2 rounded-xl text-emerald-700 items-center'>
                            <FaStar className='text-yellow-500 text-2xl'></FaStar>
                            {bestPlant?.rating}
                        </span>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlantOfWeek;