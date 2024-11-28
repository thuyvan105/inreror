"use client"; 
import { useUser } from '@clerk/nextjs';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { UserDetailContext } from './_contex/UserDetailContex'

function Provider({ children }) {

    const {user} = useUser();   
    const [userDetail, setUserDetail] = useState([]);

    useEffect(() => {
        user && VerifyUser();
    }, [user])

    // Verify User
    const VerifyUser = async () => {
            const dataResult = await axios.post('/api/verify-user', {
                user: user
            });
            setUserDetail(dataResult.data.result)
            console.log(dataResult.data);
    }

    return (
        <UserDetailContext.Provider value = {{userDetail, setUserDetail}}>

            <div>{children}</div>;

        </UserDetailContext.Provider>

    )
}

export default Provider;
