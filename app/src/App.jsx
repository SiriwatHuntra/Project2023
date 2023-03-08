import Home from "./page/Home";
import LogIn from "./page/Login";
import React from "react";
import Notfound from "./page/Notfound";
import Editprofile from "./page/Editprofile";
import { BrowserRouter, Routes, Route, Navigate }from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {

  //  const {currentUser} = useContext(AuthContext);

  //  const ProtectedRoute  = ({children})=> {
  //    if(!currentUser) {
  //      return <Navigate to='Login'/>
  //    }
  //    return children
  //  }

  return (
    // <BrowserRouter>
    // <Routes>
    //  <Route path="/" />
    //   <Route index element={
    //     <ProtectedRoute>
    //       <Home/>
    //     </ProtectedRoute>
    //   }/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Login" element={<LogIn/>}/>
    <Route path="*" element={<Notfound/>}/>
    <Route path="/Editprofile" element={<Editprofile/>}/>
    </Routes>


    // </Routes>
    // </BrowserRouter>

  );
}


export default App;

