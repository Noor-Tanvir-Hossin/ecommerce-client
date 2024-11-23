// import React from 'react';
import  { useEffect, useState } from 'react';
// import useAuth from './useAuth';
import axios from 'axios';
import useAuth from './useAuth';

const useUserData = () => {
    const { user, loading } = useAuth()
    // console.log(user.email);
    
    const [userData, setUserData] = useState({});

    useEffect(() => {
        const fetchUserData = async () => {
            const res = await axios.get(`http://localhost:5000/user/${user.email}`)
            setUserData(res.data)
            // console.log(res.data);

            
        };
        if (user?.email && !loading) {
            fetchUserData()
        };
    }, [user, loading]);

    return userData
    // console.log(userDAta);
};

export default useUserData;