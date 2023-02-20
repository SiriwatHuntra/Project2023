import React from 'react'
import { auth } from '../firebase';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

function LogIn() {

    const signWithGoogle = () => {    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then(res => {
        console.log(res)
    }).catch(err => {
        console.log(err)
    })}

  return (
    <div>
      <button onClick={signWithGoogle}>Log In</button>
    </div>
  )
}

export default LogIn
