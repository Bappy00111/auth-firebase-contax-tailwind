import React, { useContext } from 'react';
import { AuthContax } from '../component/Providers/AuthProviders';
import { Navigate } from 'react-router-dom';

const PrivetsRoutes = ({children}) => {
    const {user,loading} = useContext(AuthContax);

    if(loading){
        return <progress className="progress w-56"></progress>
    }
    if(user){
        return children;
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivetsRoutes;