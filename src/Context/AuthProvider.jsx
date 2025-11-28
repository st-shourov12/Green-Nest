import React, { useEffect, useState } from 'react';
import { AuthContext } from './Authcontext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../Firebase/Firebase.init';

const AuthProvider = ({children}) => {

    const [user , setUser] =useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();

    const creatUser = (email, password) =>{
        
    
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email , password) => {
        
    
        return signInWithEmailAndPassword(auth , email, password)
    }

    const signInWithGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const signOutUser = () => {
        
    
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged (auth , currentUser => {
            
            setUser(currentUser);
            setLoading(false)
        })
        return (()=>{
            unSubscribe()
        })
    }
    
    ,[])

    

    const authInfo = {
        user,
        setUser,
        loading,
        setLoading,
        creatUser,
        signInUser,
        signOutUser,
        signInWithGoogle
    }

    return (
        
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        
    );
};

export default AuthProvider;