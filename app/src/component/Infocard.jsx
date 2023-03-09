import React from 'react'
import { auth, db } from '../firebase';
import { getDoc, doc, collection, onSnapshot } from "firebase/firestore";

function Infocard() {
    const user = auth.currentUser;
    const docRef = doc(db, 'Users', user.uid)

    onSnapshot(docRef, (doc)=> {
      console.log(doc.data())
    });

    return (
<div className="card">
<h2 classNameName='logo'>User Info</h2>
   <div className="card-body">
    <span>{user.email}</span>
  </div>
  <div className="card-body">
    <span>{}</span>
  </div>

</div>
  )
}

export default Infocard
