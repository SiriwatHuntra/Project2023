import { Routes, Route }from "react-router-dom";
import Home from "./page/Home";
import LogIn from "./page/Login";

import React from "react";
import Notfound from "./page/Notfound";
import Editprofile from "./page/Editprofile";

function App() {

  // const {currentUser} = useContext(AuthContextProvider);

  // const ProtectedRoute  = ({children})=> {
  //   if(!currentUser) {
  //     return <Navigate to='Login'/>
  //   }
  //   return children
  // }

  return (
    <Routes>

    {/* <Route path="/" />
      <Route index element={
        <ProtectedRoute>
          <Home/>
        </ProtectedRoute>
      }/> */}

    <Route path="/" element={<Home/>}/>
    <Route path="/Login" element={<LogIn/>}/>
    <Route path="*" element={<Notfound/>}/>
    <Route path="/Editprofile" element={<Editprofile/>}/>

    </Routes>


  );
}


export default App;

