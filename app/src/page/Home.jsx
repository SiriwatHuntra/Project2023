import { signOut } from 'firebase/auth'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Infocard from '../component/Infocard';
import Navbar from '../component/Navbar';
import { auth } from '../firebase';
import '../Decorate/logOutButton.css'

function Home() {

  const navigate = useNavigate();

  return (

    <div>
      <h1>Home</h1>
      <Navbar/>
      <Infocard/>
      <button className="logout-button" onClick={()=>signOut(auth).then(navigate("/"))}>logout</button>
    </div>
  )
}

export default Home

