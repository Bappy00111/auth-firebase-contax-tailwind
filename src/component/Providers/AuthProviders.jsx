import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../firebase/firebase.confige';




export const AuthContax = createContext(null);

const auth = getAuth(app);
const AuthProviders = ({children}) => {
// const auth = getAuth(App);

    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const carateUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }


    const singIn = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    // obserb auth satae change 
    useEffect(()=>{
      const unSubscribe =  onAuthStateChanged(auth,currentuser =>{
            console.log('auth state change',currentuser)
            setUser(currentuser)
            setLoading(false)
        })
        return ()=>{
            unSubscribe()
        }
    },[])

    // singout method 
    const logOut = () =>{
        return signOut(auth)
     
    }


    const authInfo ={
        user,
        loading,
        carateUser,
        singIn,
        logOut
    }
    return (
        <AuthContax.Provider value={authInfo}>
            {children}
        </AuthContax.Provider>
    );
};

export default AuthProviders;