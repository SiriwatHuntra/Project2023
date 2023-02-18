import React from "react";
import { Route, Routes } from "react-router-dom";
import Protecter from "./component/Protecter";
import { AuthContextProvider } from "./context/AuthContext";
import Home from "./page/Home";
import Login from "./page/Login";
import Account from "./page/Account";
import Navbar from "./component/NavBar";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Account"
          element={
            <Protecter>
              <Account/>
            </Protecter>
          }/>
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;

//
// https://www.youtube.com/watch?v=jCY6DH8F4oc&list=PLpPqplz6dKxUfvM22GXRvYA4s-mvJE0XF&index=1
//19.43
//
