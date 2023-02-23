import React from 'react'
import { auth, db } from '../firebase';
import { getDoc, doc } from "firebase/firestore";

function Infocard() {
    const user = auth.currentUser;

  //data reader // Prob: code green but dosen't show any thing
  const docRef = doc(db, 'Users', user.uid)

  async function getUser(){
    const docSnap = await getDoc(docRef);
    return docSnap
  }



    return (
<div class="card">
<h2 className='logo'>User Info</h2>
  <div class="card-body">
    <span>{user.email}</span>
  </div>
  <div class="card-body">
    <span>{user.uid}</span>
  </div>
  <div class="card-body">
    <span>{getUser}</span>
  </div>
</div>
  )
}

export default Infocard
