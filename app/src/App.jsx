import Home from "./page/Home";
import LogIn from "./page/Login";
import React from "react";
import Notfound from "./page/Notfound";
import Editprofile from "./page/Editprofile";
import Signup from "./page/Signup";
import { Routes, Route}from "react-router-dom";


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
    <Route path="/Login" element={<LogIn/>}/>
    <Route path="/Register" element={<Signup/>}/>
    <Route path="/*" element={<Notfound/>}/>

    <Route path="/" element={<Home/>}/>
    <Route path="/Editprofile" element={<Editprofile/>}/>
    </Routes>
    /* </Routes>
    </BrowserRouter> */

  );
}
export default App;

