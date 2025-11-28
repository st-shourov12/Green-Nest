import React from 'react';
import {  Link, useParams } from 'react-router';
import usePlant from '../../usePlant';
import { FaBangladeshiTakaSign, FaStar } from 'react-icons/fa6';
import BookC from './BookC';
import Loading from '../../Loading/Loading';
import Error2 from '../../Error/Error2';


const PlantDetails = () => {

    const {id} = useParams();
    const {plants, loading} = usePlant();
    const filterPlant = plants.filter(p => Number(p.id) === Number(id));

    if (loading) {
        return <Loading />
    }

    if(id>12 || isNaN(id)){
        return <Error2 />
    }

    

    return (
        <div className='bg-green-100'>

             {
                filterPlant.map(plant =>
                    <div key={plant.id} className='p-10 sm:p-20'>
                        

                        <div className="flex flex-col sm:flex-row items-center gap-10">
                            <figure className='justify-self-end'>
                                <img
                                src={plant?.image}
                                alt="Album" 
                                className='rounded-lg w-[300px] h-[300px]'/>
                            </figure>
                            <div className="flex flex-col items-center sm:items-start space-y-2 ">
                                <h2 className="text-xl sm:text-3xl font-bold">{plant?.name}</h2>
                                <h3 className="sm:text-xl text-gray-700">Category: {plant?.category}</h3>
                                <div className="flex gap-3">
                                    <div className='text-green-800 flex gap-2 items-center text-lg font-bold'>
                                        <FaBangladeshiTakaSign></FaBangladeshiTakaSign>
                                        {plant?.price}
                                    </div>
                                    
                                    <span className='flex text-yellow-500 gap-2 items-center font-semibold'>
                                        <FaStar className='text-yellow-500'></FaStar>
                                    {plant?.rating}
                                    </span>
                                </div>
                                <div className="flex gap-3 flex-col lg:flex-row items-center">
                                    <div className='text-yellow-800 flex gap-2 items-center text-lg font-bold'>
                                            
                                        Available : {plant?.availableStock}
                                    </div>
                                    
                                    <div className='text-gray-700 flex gap-2 items-center text-lg font-bold'>
                                        
                                        Provider : {plant?.providerName}
                                    </div>
                                </div>
                                <div className='text-gray-100 flex gap-2 bg-emerald-600 px-3 py-2 rounded-lg items-center text-lg font-bold'>
                                            
                                    Care : {plant?.careLevel}
                                </div>
                                
                                
                                
                                
                            </div>
                        </div>
                        <div className="my-5 space-y-2.5">
                            <h2 className='text-2xl font-semibold'>Description</h2>
                            <p className='text-xl  text-gray-800'>
                                {plant?.description}
                            </p>

                           
                        </div>

                        <BookC></BookC>

                        <div className="flex justify-center py-10">
                            <Link className='text-center py-2 px-3 bg-green-600 hover:bg-green-700 rounded-lg text-white' to={-1}>Go Back</Link>
                        </div>
                    </div>
                )
            }

            
            

        </div>
    );
};

export default PlantDetails;