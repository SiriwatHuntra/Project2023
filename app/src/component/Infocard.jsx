import React from 'react'
import { auth, db } from '../firebase';
import { getDoc, doc } from "firebase/firestore";

function Infocard() {
    const user = auth.currentUser;

    // const docRef = doc(db, "Users", "");
    async function getData() {
      const docRef = doc(db, "Users", user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        return docSnap.data()
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
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
    <span>{getData}</span>
  </div>
</div>
  )
}

export default Infocard
