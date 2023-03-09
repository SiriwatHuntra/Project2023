import React, { useState } from 'react'
import { auth, db } from '../firebase';
import { collection, doc, getDoc, onSnapshot } from "firebase/firestore";

function Infocard() {
    const user = auth.currentUser;
    // const docRef = doc(db, 'Users', user.uid)

    //   onSnapshot(docRef, (doc)=> {
    //     const userName = doc.data().name
    //     return userName
    //   });
    const [userName, setUserName] = useState('');
    const [userLastName, setUserLastName] = useState('');
    const [userFaculty, setUserFaculty] = useState('');

    const docRef = doc(db, 'Users', user.uid)
    onSnapshot(docRef, (doc)=> {
      const data = doc.data();

      const userName = data.name
      const userLastName = data.lastName
      const userFaculty = data.faculty

      setUserName(data.name);
      setUserLastName(data.lastName);
      setUserFaculty(data.faculty);


    })


    return (
<div className="card">
<h2 classNameName='logo'>User Info</h2>
   <div className="card-body">
    <span>User mail: {user.email}</span>
  </div>
  <div className="card-body">
    <span>Name: {userName}</span>
  </div>
  <div className="card-body">
    <span>LastName:{userLastName}</span>
  </div>
  <div className="card-body">
    <span>Faculty: {userFaculty}</span>
  </div>
</div>
  )
}

export default Infocard
