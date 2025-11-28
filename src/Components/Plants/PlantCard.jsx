import React from 'react';
import { FaBangladeshiTakaSign, FaStar } from 'react-icons/fa6';
import { Link } from 'react-router';

const PlantCard = ({plant}) => {
    return (
        <div className='card bg-white border border-green-500 hover:-translate-y-2 transition-all duration-400 gap-2.5 justify-self-center flex flex-col w-[320px] p-3 sm:p-4 rounded-2xl'>
                            <figure>
                                <img src={plant.image} alt={plant.name}  className='w-[300px] h-[400px] rounded-xl'/>

                            </figure>
                            <h2 className='text-xl text-gray-700 font-semibold'>
                                {plant.name}
                            </h2>
                            <div className="flex flex-row-reverse justify-between">
                                <div className='text-green-800 flex gap-2 items-center text-lg font-bold'>
                                    <FaBangladeshiTakaSign></FaBangladeshiTakaSign>
                                    {plant.price}
                                </div>
                                <span className='flex gap-2 font-semibold items-center'>
                                    <FaStar className='text-yellow-500'></FaStar>
                                    {plant.rating}
                                </span>
                            </div>
                            <Link to={`plants/${plant.id}`} className="py-2 text-center text-white rounded-xl bg-green-600 hover:bg-green-700">
                                View Details
                            </Link>
                    
                            

        </div>
    );
};

export default PlantCard;