import { BrowserRouter, Routes, Route, Navigate, useNavigate }from "react-router-dom";
import Home from "./page/Home";
import LogIn from "./page/Login";

import React, { useContext } from "react";
import Notfound from "./page/Notfound";
import Editprofile from "./page/Editprofile";
import { AuthContextProvider } from "./context/AuthContext";

function App() {

  const {currentUser} = useContext(AuthContextProvider);

  const ProtectedRoute  = ({children})=> {
    if(!currentUser) {
      return <Navigate to='Login'/>
    }
    return children
  }

  return (
    <BrowserRouter>
    <Routes>

    <Route path="/" />
      <Route index element={
        <ProtectedRoute>
          <Home/>
        </ProtectedRoute>
      }/>


    <Route path="/Login" element={<LogIn/>}/>
    <Route path="*" element={<Notfound/>}/>
    <Route path="/Editprofile" element={<Editprofile/>}/>

    </Routes>
    </BrowserRouter>


  );
}


export default App;

