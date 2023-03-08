import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, {useState} from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { app, auth, storage } from '../firebase'

const Signup = () => {

    const navigate = useNavigate();
    const [err,setErr] = useState(false)


    const handleSubmit = async (e)=>{
        e.preventDefault();
        const userName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const icon = e.target[3].files[0];


    }

  return (
    <div>
        <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" name="password" className="form-control" id="exampleInputPassword1"/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <p>have an account? <Link to="/login">Login</Link> </p>
    </div>
  )
}

export default Signup
