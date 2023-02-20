import { BrowserRouter, Routes, Route, Navigate }from "react-router-dom";
import Home from "./page/Home";
import LogIn from "./page/Login";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import React from "react";

function App() {

  const {currentUser} = useContext(AuthContext)

  const ProtectedRoute = ({children}) => {
    if(!currentUser){
      return <Navigate to="/Login"/>
    }

    return children
  }

  return (
    <div>

    <Route path="/" element={<Home/>}/>
    <Route path="/Login" element={<LogIn/>}/>

    </div>
  );
}

export default App;

