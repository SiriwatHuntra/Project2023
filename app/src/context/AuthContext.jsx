import { useContext, createContext, useEffect, useState } from "react";
import { GoogleAuthProvider,
    signInWithRedirect,
    signOut,
    onAuthStateChanged }
    from "firebase/auth";
import { auth } from "../firebase";


const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {

    const [user, setUser] = useState({});
    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        //signInWithPopup(auth, provider)
        signInWithRedirect(auth, provider)
    };

    const logOut = () => {
        signOut(auth)
    }

    useEffect(() => {
        const unsubmit = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log('User', currentUser)
        });
        return () => {
            unsubmit();
        };
    }, []);

    return(
        <AuthContext.Provider value = {{googleSignIn, logOut, user}}>
            {children}
        </AuthContext.Provider>
        )
    };

export const UserAuth =() => {
    return useContext(AuthContext)
}
