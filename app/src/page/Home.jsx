import { signOut } from 'firebase/auth'
import React from 'react'
import Infocard from '../component/Infocard';
import Navbar from '../component/Navbar';

function Home() {

  return (
    <div>
      <Navbar/>
      <h1>Home</h1>
      <Infocard/>
      <button onClick={signOut}>Log Out</button>
    </div>
  )
}

export default Home
