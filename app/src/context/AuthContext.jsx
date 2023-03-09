// import { onAuthStateChanged } from "firebase/auth";
// import { createContext, useEffect, useState } from "react";
// import { auth } from "../firebase";

// export const AuthContext = createContext();

// export const AuthContextProvider = ({ children }) => {
//     const [currentUser, setCurrentUser] = useState({});

//     useEffect(() => {
//         const unsub =  onAuthStateChanged(auth, (user) => {
//             setCurrentUser(user);
//             console.log(user);
//         });

//         return () =>{
//             unsub();
//         }
//     }, []);

//     return(
//         <AuthContext.Provider value={{currentUser}}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const login = (user) => {
    setCurrentUser(user);
  };

  const logout = () => {
    setCurrentUser(null);
  };

  const value = {
    currentUser,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>
    {children}
    </AuthContext.Provider>;
};
