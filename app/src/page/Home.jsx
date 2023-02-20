import React from 'react'

function Home() {

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
