import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router';

const PrivateRouts = ({children}) => {
    const {loading,user}=useAuth();
    let location =useLocation();
    if(loading){
        return <span className="loading loading-spinner text-center loading-xl"></span>
    }
    if(!user){
        <Navigate to='/login' state={{from:location}}></Navigate>
    }
    return children;
};

export default PrivateRouts;