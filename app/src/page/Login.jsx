import React from 'react'
import { auth } from '../firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import { GoogleButton } from 'react-google-button';


function LogIn() {

    const  navigate = useNavigate();

     const signWithGoogle = () => { const provider = new GoogleAuthProvider();
         signInWithPopup(auth, provider).then(res => {
         console.log(res)
        navigate('/Home')

    }).catch(err => {
         console.log(err)
     })}

   return (
     <div>
       <div className='max-w-[240px] m-auto py-4'>
         <h1>AvatarCreater</h1>
         <GoogleButton onClick={signWithGoogle} />
       </div>
     </div>
   )
 }

 export default LogIn
