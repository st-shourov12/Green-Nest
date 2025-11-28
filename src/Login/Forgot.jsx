import { sendPasswordResetEmail } from 'firebase/auth';
import React, { use, useState } from 'react';
import { auth } from '../Firebase/Firebase.init';
import { toast } from 'react-toastify';

import usePlant from '../usePlant';
import Loading from '../Loading/Loading';
import { AuthContext } from '../Context/Authcontext';
import { useLocation, useNavigate } from 'react-router';

const Forgot = () => {
    const [resetEmail , setResetEmail] = useState('')
    const [message, setMessage] = useState("");
    const {loading} = usePlant();
    const {user} = use(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    if (loading) {
        return <Loading />
    }

    if(user){
        return (navigate(location?.state || '/'))
    }

    const handleforgot = e =>{
        e.preventDefault();
        if (!resetEmail) {
            setMessage("Please enter your email!");
            return
        }
        sendPasswordResetEmail(auth , resetEmail)
        .then(()=>{
            
            setMessage('Check Your Mail Box')
        })
        .catch(err=>toast.error(err.message))
    }
    return (
        <div className="hero bg-emerald-100 p-5 min-h-[60vh]">
            <title>Forgotten Password</title>
  
                <div className="card bg-emerald-300 text-gray-800 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-2xl font-bold">Reset PassWord</h1>
                        
                        <form onSubmit={handleforgot}>
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input value={resetEmail} onChange={(e) => setResetEmail(e.target.value)} type="email" name='email' className="input w-full" placeholder="Email" />
                                {message && <h2 className="text-xl font-medium text-red-600 text-center">{message}</h2>}
                                <button type='submit' className="btn btn-neutral mt-4">Reset Password</button>
                            </fieldset>
                        </form>
                        
                       
                        
                    </div>
                </div>
        </div>
    );
};

export default Forgot;