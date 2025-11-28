import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import './Navbar.css';
import { AuthContext } from '../../Context/Authcontext';
import UserProfile from './UserProfile';

const Navbar = () => {

    const {user, signOutUser} = use(AuthContext);
    return (
        <nav className="navbar px-2 bg-emerald-100 shadow-sm">
            
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><NavLink to={'/'}>Home</NavLink></li>
                        <li>
                        <NavLink to={'/plants'}>Plants</NavLink>
                        </li>
                        <li><NavLink to={'/myProfile'}>My Profile</NavLink></li>
                    </ul>
                    </div>
                    <h2>
                        <Link to={'/'} className="font-bold sm:text-xl px-1 sm:px-4 text-green-600">Green Nest</Link>
                    </h2>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    <li><NavLink to={'/'} className={'md:text-lg'}>Home</NavLink></li>
                    <li>
                        <NavLink to={'/plants'} className={'md:text-lg'}>Plants</NavLink>
                    </li>
                    <li><NavLink to={'/myProfile'} className={'md:text-lg'}>My Profile</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end menu-end flex gap-2">

                    {
                        user ? 
                        <UserProfile signOutUser= {signOutUser}></UserProfile> : 
                        <div className='flex log-btn gap-2.5'>
                            <NavLink to={'/login'} className={'px-3 py-2 bg-white text-green-700 rounded-lg border border-green-900'}>Login</NavLink>
                            <NavLink to={'/register'} className={'px-3 py-2 bg-green-700 text-white rounded-lg border'}>Register</NavLink>
                        </div>
                    }
                    
                        
                    
                </div>
           
            
        </nav>
    );
};

export default Navbar;