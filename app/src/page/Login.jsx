import React , {useEffect} from 'react'
import {GoogleButton} from 'react-google-button'
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () =>  {
    const {googleSignIn, user} = UserAuth();
    const navigate = useNavigate();

    const handleLogIn = async () => {
        try{
            await googleSignIn();
        }catch(error){
            console.log(error)
        }
    };

    useEffect(()=> {
        if (user != null) {
            navigate('/Account');
          }
        }, [navigate, user]);

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
