import React from 'react';

const PlantCare = () => {
    return (
        <div className='p-5 sm:p-10 md:p-20 bg-emerald-600 '>
            <h2 className='text-xl md:text-3xl text-bold text-center text-white mb-5'>Plant Care Tips</h2>
            <p className='md:text-xl mb-5 text-semibold text-center text-white lg:w-2/3 mx-auto'>
                Plants are full of life . They need proper care for living . 
            </p>
            <div className='grid gap-5 lg:grid-cols-3'>
                <div className='card w-full mx-auto bg-emerald-200 text-gray-800 justify-self-center items-center gap-2.5 flex flex-col  p-5 xl:py-10 xl:px-15'>
                    <figure>
                        <img src='https://i.ibb.co.com/b5nC4mqW/QWSXWDZy9d-Wa-Dj7-J5sk-Lu8.jpg'  alt="plant.name"  className='w-[100px] h-[100px] rounded-xl'/>

                    </figure>
                    <h2 className='text-xl font-semibold'>
                       Watering Tips 💧
                    </h2>
                    <p className='text-center'>
                        Water the plant only when the soil becomes dry. Overwatering can cause root rot.
                    </p>
                            
                    
                            

                </div>
                <div className='card w-full mx-auto bg-emerald-200 text-gray-700 justify-self-center items-center gap-2.5 flex flex-col  p-5 xl:py-10 xl:px-15'>
                    <figure>
                        <img src='https://i.ibb.co.com/Jw2MZfn3/KHR6-Lh-LEffe9drf-ENs-F87-Q-1200-80.jpg'  alt="plant.name"  className='w-[100px] h-[100px] rounded-xl'/>

                    </figure>
                    <h2 className='text-xl font-semibold'>
                       Sunlight Tips ☀️
                    </h2>
                    <p className='text-center'>
                        Keep the plant in sunlight for at least 4-6 hours daily. However, indirect or filtered light is better than direct sunlight.
                    </p>
                            
                    
                            

                </div>
            
                <div className='card w-full mx-auto bg-emerald-200 text-gray-700 justify-self-center items-center gap-2.5 flex flex-col  p-5 xl:py-10 xl:px-15'>
                    <figure>
                        <img src='https://i.ibb.co.com/svbxKcbS/indoorplantfertilizer.jpg'  alt="plant.name"  className='w-[100px] h-[100px] rounded-xl'/>

                    </figure>
                    <h2 className='text-xl font-semibold'>
                       Fertilizing Tips 🌾
                    </h2>
                    <p className='text-center'>
                        Apply organic fertilizer once every two weeks. Excessive chemical fertilizer can reduce plant growth.
                    </p>
                            
                    
                            

                </div>

                
            </div>
            
            
            
        </div>
    );
};

export default PlantCare;