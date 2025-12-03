import React from 'react';

import { Link } from 'react-router';
import {  FaFacebookF, FaGithub, FaHome} from 'react-icons/fa';
import { FaLinkedin ,  FaPerson, FaLock } from 'react-icons/fa6';


const Footer = () => {
    return (
        <div className='bg-green-800 py-5 lg:pt-20 w-full mx-auto'>

            <div className='bg-green-800 w-11/12 mx-auto flex flex-col gap-5 justify-between items-center text-white'>
                <Link to={'/'} className="flex gap-2 font-bold items-center text-3xl hover:text-emerald-200">
                    Green Nest
                </Link>
                <div className="grid grid-cols-2 md:grid-cols-3 justify-between gap-5 items-center">

                    
                    <p className="text-lg col-span-2 md:col-span-1 md:col-start-2  text-center">
                        We are here to make our planet better . In this modern civilization everyone is busy to use the environment for their need. So we are here to make awareness through our campaign. 
                    </p>
                    

                    <div className="social justify-self-start md:row-start-1 md:col-start-1 flex flex-col justify-between gap-4">
                        <Link to={"/"} className='flex gap-2 items-center hover:text-emerald-200' ><FaHome  /><span className='font-medium '>About</span></Link>
                        <Link to={"/plants"} className='flex gap-2 items-center hover:text-emerald-200' ><FaLock /><span className='font-medium '>Privacy</span></Link>
                        <Link to={"/myProfile"} className='flex gap-2 items-center hover:text-emerald-200' ><FaPerson /><span className='font-medium '>Contact</span></Link>
                        
                    </div>
                        <div className="social justify-self-end items-end flex flex-col justify-between gap-4">
                            <a href="https://www.facebook.com/mirazulislam.shourov" target="_blank" className='flex gap-2 items-center hover:text-emerald-200' ><FaFacebookF  /><span className='font-medium '>Facebook</span></a>
                            <a href="https://github.com/st-shourov12/" target="_blank" className='flex gap-2 items-center hover:text-emerald-200' ><FaGithub /><span className='font-medium '>GitHub</span></a>
                            <a href="https://www.linkedin.com/in/md-mirazul-islam-shourov-69a05637a/" target="_blank" className='flex gap-2 items-center hover:text-emerald-200' ><FaLinkedin /><span className='font-medium '>LinkedIn</span></a>
                        </div>


                
                

                </div>
                
                <div className="text-white">
                    
                    <h3 className='text-center mt-5'>
                        © 2025 GreenNest. All rights reserved.
                    </h3>
                </div>
                
            </div>
        </div>
    );
};

export default Footer;