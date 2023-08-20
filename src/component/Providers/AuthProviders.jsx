import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from '../../firebase/firebase.confige';




export const AuthContax = createContext(null);

const auth = getAuth(app);
const AuthProviders = ({children}) => {
// const auth = getAuth(App);

    const [user,setUser] = useState(null);

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
        })
        return ()=>{
            unSubscribe()
        }
    },[])


    const authInfo ={
        user,
        carateUser,
        singIn
    }
    return (
        <AuthContax.Provider value={authInfo}>
            {children}
        </AuthContax.Provider>
    );
};

export default AuthProviders;