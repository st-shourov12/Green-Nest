import React from 'react';

const MeetExperts = () => {
    return (
        <div className=' py-20 bg-emerald-100  '>
            <div className="w-11/12 mx-auto">
            
                <h2 className='text-xl md:text-3xl font-bold text-center mb-5'>Meet Our Expert</h2>
                <p className='md:text-xl mb-5 text-semibold text-center text-gray-700 lg:w-2/3 mx-auto'>
                    There are top Expert in botany sector with us . They are always here to guide you to make the nature more standard
                </p>
                <div className='grid gap-5 lg:grid-cols-3'>
                    <div className='card w-full mx-auto bg-emerald-500 text-white justify-self-center items-center gap-2.5 flex flex-col  p-5 xl:py-10 xl:px-15'>
                        <figure>
                            <img src='https://i.ibb.co.com/yrrM3Vc/429281.jpg'  alt="plant.name"  className='w-[100px] h-[100px] rounded-full'/>

                        </figure>
                        <h2 className='text-xl font-semibold'>
                            Cato Obanai 
                        </h2>
                        <h3 className="my-2 5">
                            abc@gmail.com
                        </h3>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-between gap-2'>
                            <span className='py-2 px-3 justify-self-center rounded-lg bg-amber-400 text-green-700'>Aromatic</span>
                            <span className='py-2 px-3 justify-self-center rounded-lg bg-amber-400 text-green-700'>Low light</span>
                            <span className='py-2 px-3 justify-self-center rounded-lg bg-amber-400 text-green-700'>Decorative</span>
                        </div>
                                
                        
                                

                    </div>
                    <div className='card w-full mx-auto bg-emerald-500 text-white justify-self-center items-center gap-2.5 flex flex-col p-5 xl:py-10 xl:px-15'>
                        <figure>
                            <img src='https://i.ibb.co.com/60JQCzkq/Kittens-Lying-Face-Tabby-and-Red-Cat-Wallpaper.jpg'  alt="plant.name"  className='w-[100px] h-[100px] rounded-full'/>

                        </figure>
                        <h2 className='text-xl font-semibold'>
                            MI Hau  
                        </h2>
                        <h3 className="my-2 5">
                            mihau@gmail.com
                        </h3>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-between gap-2'>
                            <span className='py-2 px-3 justify-self-center rounded-lg bg-amber-400 text-green-700'>Tropical</span>
                            <span className='py-2 px-3 justify-self-center rounded-lg bg-amber-400 text-green-700'>Vine</span>
                            <span className='py-2 px-3 justify-self-center rounded-lg bg-amber-400 text-green-700'>Succulent</span>
                        </div>
                                
                        
                                

                    </div>
                
                    <div className='card w-full mx-auto bg-emerald-500 text-white justify-self-center items-center gap-2.5 flex flex-col  p-5 xl:py-10 xl:px-15'>
                        <figure>
                            <img src='https://i.ibb.co.com/fz3sG2vp/aad643ba0ff90e5ba8f90224a1c05ab7.jpg' alt="plant.name"  className='w-[100px] h-[100px] rounded-full'/>

                        </figure>
                        <h2 className='text-xl font-semibold'>
                            Hacker 
                        </h2>
                        <h3 className="my-2 5">
                            hacked@gray.com
                        </h3>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-between gap-2'>
                            <span className='py-2 px-3 justify-self-center rounded-lg bg-amber-400 text-green-700'>Decorative</span>
                            <span className='py-2 px-3 justify-self-center rounded-lg bg-amber-400 text-green-700'>Vine</span>
                            <span className='py-2 px-3 justify-self-center rounded-lg bg-amber-400 text-green-700'>Flowering</span>
                        </div>  
                        
                                

                    </div>

                    
                </div>
            </div>
            
            
            
        </div>
    );
};

export default MeetExperts;