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
<div className="card">
<h2 classNameName='logo'>User Info</h2>
  <div className="card-body">
    <span>{user.email}</span>
  </div>
  <div className="card-body">
    <span>{user.uid}</span>
  </div>
  <div className="card-body">
    <span>{getUser}</span>
  </div>
</div>
  )
}

export default Infocard
