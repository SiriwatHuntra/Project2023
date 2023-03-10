import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, {useState} from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { auth } from '../firebase'

const Signup = () => {

    const navigate = useNavigate();
    const [err,setErr] = useState(false)


    const handleSubmit = async (e)=>{
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;


        try {
            const res = await createUserWithEmailAndPassword(auth, email, password)
            alert('user created');
            navigate("/")

        } catch (error) {
            setErr(true)
        }

    }

  return (
    <div className='formContainer'>
        <span className="logo">Register</span>
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder="email"/>
            <input type="password" placeholder="password"/>
            <input style={{display: "none"}} type="file" id="file"/>
            <button>Register</button>
            {err && <span className="alert alert-danger">Something wrong</span>}
        </form>
        <p>have an account? <Link to="/login">Login</Link> </p>
    </div>
  )
}

export default Signup
