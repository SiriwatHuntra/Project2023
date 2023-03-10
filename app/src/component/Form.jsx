import React from 'react'
import { doc, setDoc } from "firebase/firestore"
import { db, auth } from '../firebase';
import "../Decorate/form.css"

function Form() {
  const user = auth.currentUser;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const lastName = e.target[1].value;
    const faculty = e.target[2].value;
    const uid = user.uid
    try {
      await setDoc(doc(db, 'Users', uid), {
        uid,
        name,
        lastName,
        faculty
      })
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="my-5">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" required />
        </div>

        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">Last Name</label>
          <input type="text" className="form-control" id="lastName" required />
        </div>

        <div className="mb-3">
          <label htmlFor="faculty" className="form-label">Faculty</label>
          <input type="text" className="form-control" id="faculty" required />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Form
