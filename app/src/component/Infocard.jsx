import React from 'react'
import { auth, db } from '../firebase';
import { doc, getDoc, onSnapshot } from "firebase/firestore";

function Infocard() {
    const user = auth.currentUser;

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
  </div>
</div>
  )
}

export default Infocard
