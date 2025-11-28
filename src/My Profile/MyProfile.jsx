import React, { use, useState } from 'react';
import { AuthContext } from '../Context/Authcontext';
import { getAuth, updateProfile } from 'firebase/auth';
import { toast } from 'react-toastify';

const MyProfile = () => {
    const {user , setUser, signOutUser} = use(AuthContext);
    const [isUpdate, setIsUpdate] = useState(false);
    const auth = getAuth();
    const photo = auth.currentUser.photoURL;

    const handleUpBtn = () => {
        setIsUpdate(!isUpdate)
        
    }

     const handleSignOut =()=>{
            signOutUser()
            .then(() =>{
                toast.success('SignOut Successfully')
                
            })
            .catch( err => {toast.error(err.message)})
        }

    const handleUpdate = (event) => {
        event.preventDefault();
        const name = event.target.name.value.trim();
        const photoURL = event.target.photoURL.value.trim();
        const updateData = {};
        if (name) updateData.displayName = name;
        if (photoURL) updateData.photoURL = photoURL;

        if(!name && !photoURL){
            return(
                toast.error('Update Name or photo')
            )
        }
        updateProfile(auth.currentUser, updateData)
        .then(() => {
            toast.success("User profile updated!");
            setUser({
            ...user,
                displayName: name || user?.displayName,
                photoURL: photoURL || user?.photoURL
            });
        })
        .catch((error) => {
            toast.error("Profile update failed:", error.message);
        });

        event.target.reset()
}
    return (
        <div className='bg-green-100 p-5 lg:p-10'>
            {
                isUpdate ? 
                <h2 className="text-3xl text-center font-bold text-emerald-700 mb-5">Update Profile</h2> :
                <h2 className="text-3xl text-center font-bold text-emerald-700 mb-5">
                    My Profile
                </h2>
            }
            
            <div className="card-box max-w-[450px] rounded-xl bg-white mx-auto p-5 space-y-4">
                <figure className='flex justify-center'>
                    <img src={photo} alt="" className='w-[200px] h-[200px] rounded-full'/>
                </figure>
                <h2 className='text-2xl font-bold text-center'>
                    {user?.displayName}
                </h2>
                <h2 className='text-xl font-semibold text-gray-700 text-center'>
                    {user?.email}
                </h2>
                {
                    !isUpdate && <div className="flex flex-col sm:w-10/12 mx-auto justify-center">
                         <button className=' px-3 py-2 rounded-lg bg-green-700 hover:bg-emerald-500 text-white' onClick={handleUpBtn}>Update Profile</button>
                         <button onClick={handleSignOut} className='bg-red-700 hover:bg-red-500 my-2 px-3 py-2 rounded-lg text-white'>Sign Out</button>
                    </div>
                }

                {
                    isUpdate &&

                    
                        <div className="card-body">
                            
                            <form onSubmit={handleUpdate} className=''>
                                <fieldset className="fieldset">
                                    <label className="label">Name</label>
                                    <input type="text" name='name' className="input w-full" placeholder="Name" />
                                    
                                    <label className="label">PhotoURL</label>
                                    <input type="text" name='photoURL' className="input w-full" placeholder="PhotoURL" />
                                    

                                    
                                    <button type='submit' className="px-3 py-2 rounded-lg bg-green-700 hover:bg-emerald-500 text-white mt-4">Update</button>
                                    <button onClick={()=>{setIsUpdate(false)}} type='button' className="px-3 py-2 rounded-lg bg-red-700 hover:bg-red-500 text-white mt-4">Cancel</button>
                                </fieldset>
                            </form>
                            
                            
                        </div>
           
                }
            </div>
            
        </div>
    );
};

export default MyProfile;