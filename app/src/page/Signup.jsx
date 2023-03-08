import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import React, {useState} from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { auth, db, storage } from '../firebase'

const Signup = () => {

    const navigate = useNavigate();
    const [err,setErr] = useState(false)


    const handleSubmit = async (e)=>{
        e.preventDefault();
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;


        try {
            const res = await createUserWithEmailAndPassword(auth, email, password)
            const storageRef = ref(storage,displayName)
            const uploadTask =  uploadBytesResumable(storageRef);

            uploadTask.on(
                (error) => {
                    setErr(true)
                },
                ()=> {
                    getDownloadURL(uploadTask.snapshot.ref).then(async()=> {
                        await updateProfile(res.user, {
                            displayName,

                        });

                        await setDoc(doc(db, "Users", res.user.uid), {
                            uid: res.user.uid,
                            displayName,
                            email,

                        });

                        navigate("/")
                    });
                }

            );
        } catch (error) {
            setErr(true)
        }

    }

  return (
    <div className='formContainer'>
        <span className="logo">Register</span>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="user name" />
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
