
import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { updateProfile } from "firebase/auth";

import { AuthContext } from '../Context/Authcontext';
import { toast } from 'react-toastify';
import { FaEyeSlash } from 'react-icons/fa6';
import { FaEye } from 'react-icons/fa6';
import Loading from '../Loading/Loading';
import usePlant from '../usePlant';

const Register = () => {
    const {creatUser, setUser,user, signInWithGoogle} = use(AuthContext);

    const {loading } = usePlant();
    const [passError , setPassError] = useState('');
    const [showPassword , setShowPassword] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();

    if (loading) {
        return <Loading />
    }

    if(user){
        return (navigate(location?.state || '/'))
    }
    const handleRegister = event => {
        event.preventDefault();
        
        const name = event.target.name.value;
        const email = event.target.email.value;
        const photoURL = event.target.photoURL.value;
        const password = event.target.password.value;

        if (password.length < 6) {
            return setPassError('Password must be at least 6 character')
        }
        if (!/[A-Z]/.test(password)) {
            return setPassError("Password must have at least one Uppercase letter");
        }
        if (!/[a-z]/.test(password)) {
            return setPassError("Password must have at least one Lowercase letter");
        }

        setPassError("");
        
        creatUser(email, password)
        .then(res => {
            
            
            updateProfile(res.user, {
                displayName: name,
                photoURL: photoURL
                })
                .then(() => {
                    toast.success(`SignUp Successfully ${name}`);
                    setUser({
                    ...user,
                        displayName: name || user?.displayName,
                        photoURL: photoURL || user?.photoURL
                    });
                    
                })
                .catch((error) => {
                    toast.error("Profile update failed:", error.message);
                    
                });
                
            navigate(location?.state || '/');
            // setUser(res.user);
        })
        .catch( err=> {
            toast.error(err.message);
            
        }
        );

        
        event.target.reset()
    }

    const handleGoogleSignIn = () =>{
        signInWithGoogle()
        .then( () =>{
            
            navigate(location?.state || '/')
        })
        .catch(error =>{
            toast.error(error.message)
        })
    }

    return (
        <div className="hero bg-emerald-100 p-5 sm:p-10 lg:p-20">
            <title>Green Nest - Sign up</title>

            <div className="card bg-emerald-300 text-gray-800 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <h1 className="text-5xl font-bold">Register now!</h1>
                            <form onSubmit={handleRegister}>
                                <fieldset className="fieldset flex flex-col gap-2">
                                    <label className="label text-gray-800">Name</label>
                                    <input type="text" name='name' className="input w-full" placeholder="Name" required/>
                                    <label className="label text-gray-800">Email</label>
                                    <input type="email" name='email' className="input w-full" placeholder="Email" required />
                                    <label className="label text-gray-800">PhotoURL</label>
                                    <input type="text" name='photoURL' className="input w-full" placeholder="PhotoURL" required/>
                                    <label className="label text-gray-800">Password</label>
                                    
                                    <div className="relative">
                                        <input type={showPassword ? "text" : "password"} name='password' className="input w-full" placeholder="Password" required/>
                                        <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-2.5 text-gray-600 hover:text-gray-800">
                                            {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                                        </button>
                                    </div>



                                    {
                                        passError && <p className="text-red-700 ">{passError}</p>
                                    }
                                   
                                    

                                    
                                    <button className="btn bg-gray-800 border-0 shadow-none text-white mt-4">Register</button>
                                </fieldset>
                            </form>
                            <div className="grid grid-cols-3 items-center">
                                <div className='bg-white h-px'></div>
                                <div className='justify-self-center text-lg'>Or</div>
                                <div className='bg-white h-px'></div>
                            </div>

                            <button onClick={handleGoogleSignIn} className="btn bg-white text-black border-[#e5e5e5]">
                                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                Login with Google
                            </button>
                            <p>Already have an account? <Link className='text-blue-800 hover:text-blue-500' to={'/login'}>Login</Link></p>
                            
                        </div>
            </div>
        </div>
    );
};

export default Register;