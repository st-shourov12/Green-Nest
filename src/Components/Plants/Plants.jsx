import React from 'react';
import { Link } from 'react-router';
import usePlant from '../../usePlant';

import PlantCard from './PlantCard';
import Loading from '../../Loading/Loading';

const Plants = ({filterPlant}) => {
    const {plants, loading} = usePlant();

    const px = filterPlant || plants;

    if (loading) {
        return <Loading />
    }

    return (
        <div className='flex px-2 bg-green-100 py-10 flex-col justify-between gap-8 items-center'>
            <title>Green Nest - Plants</title>
            {
                px.length < 12 ? 
                <h2 className='text-3xl text-center font-bold text-green-800'>Our Top Rated Plants</h2> : 
                <h2 className='text-3xl text-center font-bold text-green-800'>Our Plants</h2>
            }
            

            <div className={`w-full grid sm:grid-cols-2  lg:grid-cols-3 ${px.length === 12 ? '2xl:grid-cols-4' : '2xl:grid-cols-3'} gap-5 items-center `}>
                {
                    px.map(plant =>
                        <PlantCard key={plant.id} plant={plant}></PlantCard>
                    )
                }

                
            </div>
            {

                px.length < 12 ? <Link to={'/plants'} className='py-2 px-4 rounded-lg bg-yellow-300 hover:bg-amber-500'>Show More</Link> : <Link className='text-center py-2 px-3 bg-green-600 hover:bg-green-700 rounded-lg text-white' to={-1}>Go Home</Link>
            }
        </div>
    );
};

export default Plants;