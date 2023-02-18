import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

      return (
        <nav className="nav">
        <div className='flex justify-between bg-gray-200 w-full p-4'>
          <h1 className='text-center text-2xl font-bold site-title'>
            MyProject WebApp
          </h1>
          <Link to='/'> Home </Link>
          <Link to='/Account'> Acount </Link>
        </div>
        </nav>
      );
    };
export default Navbar;
