import React from 'react';
import {Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../CustomHooks/useAuth';
import Loder from '../../components/Loder';

const PrivateRoute = ({children}) => {
    const {user, loading}= useAuth()
    const location= useLocation()
    
    if(loading){
        return <Loder/>
    }
    if(user){
        return children;
    }

    return <Navigate to="/" state={{from: location}} replace/>
};

export default PrivateRoute;