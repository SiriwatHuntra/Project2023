import Home from "./page/Home";
import LogIn from "./page/Login";
import React, { useContext } from "react";
import Notfound from "./page/Notfound";
import Editprofile from "./page/Editprofile";
import Signup from "./page/Signup";
import { Routes, Route, Navigate}from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import ImageSwitcher from "./page/charEditDemo";


function App() {

  // alert("func is runnig")

  // const {currentUser} = useContext(AuthContext)

  // const ProtectedRoute = ({children}) => {

  //   if (!currentUser){
  //     return <Navigate to="/Login"/>
  //   }else{
  //     alert('user already login')
  //   }
  //   return children
  // }


  return (
    // <BrowserRouter>
    // <Routes>
    <Routes >
    <Route path="/" element={<LogIn/>}/>
    <Route path="/Register" element={<Signup/>}/>
    <Route path="/*" element={<Notfound/>}/>

    <Route path="/Home" element={<Home />} />
    <Route path="/Editprofile" element={<Editprofile />} />
    <Route path="/CharaDemo" element={<ImageSwitcher />} />
    </Routes>
    /* </Routes>
    </BrowserRouter> */

  );
}
export default App;

