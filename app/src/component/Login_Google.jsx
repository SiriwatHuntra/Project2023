import React from 'react'
import { auth } from '../firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import { GoogleButton } from 'react-google-button';

const LogInWithGoogle = () => {

    const  navigate = useNavigate();

     const signWithGoogle = () => {
        const provider = new GoogleAuthProvider();
         signInWithPopup(auth, provider).then((res) => {
         console.log(res)
        navigate('/Home')

    }).catch(err => {
         console.log(err)
     })}

   return (
     <div className='container'>
       <div className='max-w-[240px] m-auto py-4'>
         <GoogleButton onClick={signWithGoogle} />
       </div>
     </div>
   )
 }

 export default LogInWithGoogle
