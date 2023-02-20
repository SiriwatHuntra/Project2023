import React from "react";
import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import Home from "./page/Home";
import Navbar from "./component/NavBar";
// import Account from "./page/Account";
import NotFound from "./page/404";
import Protected from "./component/Protecter"
import LogIn from "./page/LogIn";

function App() {

  return (
    <div className="App">
      <AuthContextProvider>
        <Navbar/>
        <Routes>

          <Route path="/" element={<Home/>}/>
          <Route path='/Login' element={<LogIn />} />

          {/* <Route path="/Account" element={<Account/>}/> */}
          <Route path="*" element={<NotFound/>}/>
          <Route
            path='/Home'
            element={
              <Protected>
                <Home />
              </Protected>
            }
          />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;

