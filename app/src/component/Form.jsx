import React from 'react'
import { doc, setDoc } from "firebase/firestore"
import { db } from '../firebase';
import {auth} from '../firebase'
function Form() {
    const user = auth.currentUser;

    const handleSubmit = async (e)=> {
        e.preventDefault();
        const name = e.target[0].value;
        const lastName = e.target[1].value;
        const faculty = e.target[2].value;
        const uid = user.uid
        try{
            await setDoc(doc(db, 'Users', uid),{
            uid,
            name,
            lastName,
            faculty
            })

        }catch(err){
            console.log(err)
        }

    }

  return (
    <div>
    <form onSubmit={handleSubmit}>
        <div class="mb-3">
            <label for="name " class="form-label">Name </label>
            <input type="text" class="form-control" id="name"/>
        </div>

        <div class="mb-3">
            <label for="lastName " class="form-label">LastName </label>
            <input type="text" class="form-control" id="lastName"/>
        </div>

        <div class="mb-3">
            <label for="faculty " class="form-label">Faculty </label>
            <input type="text" class="form-control" id="faculty"/>
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    </div>
  )
}

export default Form
