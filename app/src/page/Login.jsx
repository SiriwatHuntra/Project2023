import React , {useEffect, useState} from 'react'
import {GoogleButton} from 'react-google-button'
import { UserAuth } from '../context/AuthContext';

const Login = () =>  {

    const handleLogIn = async () => {

        const {googleSignIn} = UserAuth();
        try{
            await googleSignIn
        }catch(error){
            console.log(error)
        }
    }

  return (
    <div>
        <h1 className='text-center logo font-bold py-8'>LogIn</h1>
        <div className='max-w-[240px] m-auto py-4'>
            <GoogleButton onClick={handleLogIn}/>
        </div>
    </div>
  );
}

export default Login
