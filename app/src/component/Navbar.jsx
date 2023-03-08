import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
<div>
<nav className="navbar navbar-light bg-light">
  <form className="container-fluid justify-content-start">
  <button className="btn btn-sm btn-outline-secondary" type="button" ><Link to='/Home'>Home</Link></button>
  <button className="btn btn-sm btn-outline-secondary" type="button"><Link to='/Notfound'>Notfound</Link></button>
  <button className="btn btn-sm btn-outline-secondary" type="button"><Link to='/Editprofile'>Edit Profile</Link></button>
  </form>
</nav>
</div>
  )
}

export default Navbar
