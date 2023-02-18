import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

      return (
        <nav className="nav">
          <h1 className='text-center text-2xl font-bold site-title'>
            MyProject WebApp
          </h1>
          <Link to='/'> Home </Link>
          <Link to='/Account'> Acount </Link>
        </nav>
      );
    };
export default Navbar;
