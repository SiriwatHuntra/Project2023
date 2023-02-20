import React from 'react'
import { UserAuth } from '../context/AuthContext';

function Home() {
  const { logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
            <h1>Home Page</h1>
            <button onClick={handleSignOut} className='border py-2 px-5 mt-10'>
              Logout
            </button>
    </div>
  )
}

export default Home
