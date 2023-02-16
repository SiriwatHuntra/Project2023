import { useState, useEffect } from 'react';

import './App.css';

function App() {

  const [users, setUsers] = useState([]);

  useEffect(()=> {
    const getUser = async () => {

    }

    getUser()
  }, [])

  return (
    <div className="App">

    </div>
  );
}

export default App;

//
// https://www.youtube.com/watch?v=jCY6DH8F4oc&list=PLpPqplz6dKxUfvM22GXRvYA4s-mvJE0XF&index=1
//19.43
//
