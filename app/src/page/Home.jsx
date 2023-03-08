import { signOut } from 'firebase/auth'
import React from 'react'
import Infocard from '../component/Infocard';
import Navbar from '../component/Navbar';
import { auth } from '../firebase';

function Home() {

  return (

    <div>
      <h1>Home</h1>
      <Navbar/>
      <Infocard/>
      <button onClick={()=>signOut(auth)}>Log Out</button>
    </div>
  )
}

export default Home
