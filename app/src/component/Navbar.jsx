import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Decorate/navbar.css';

function Navbar() {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/Home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Editprofile">Edit Profile</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/CharaDemo">CharaDemo</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


