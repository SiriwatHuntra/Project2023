import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { app } from '../firebase';
import { auth } from '../firebase';
import { Link } from 'react-router-dom';
const LogIn = () => {

    const [err, setErr] = useState(false)

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;
        const navigate = useNavigate();
        try{
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/Home')

        }catch(err){
            setErr(true);
        }
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1"/>
        </div>
        <p>You don't have an account? <Link to="/register">Register</Link></p>
        <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default LogIn
