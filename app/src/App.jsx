import { BrowserRouter, Routes, Route, Navigate }from "react-router-dom";
import Home from "./page/Home";
import LogIn from "./page/Login";

import React from "react";
import Notfound from "./page/Notfound";
import Editprofile from "./page/Editprofile";

function App() {


  return (

    <Routes>

    <Route path="/Login" element={<LogIn/>}/>
    <Route path="*" element={<Notfound/>}/>
    <Route path="/" element={<Home/>}/>
    <Route path="/Editprofile" element={<Editprofile/>}/>

    </Routes>

  );
}


export default App;

