import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
<div>
<nav class="navbar navbar-light bg-light">
  <form class="container-fluid justify-content-start">
  <button class="btn btn-sm btn-outline-secondary" type="button" ><Link to='/'>Home</Link></button>
  <button class="btn btn-sm btn-outline-secondary" type="button"><Link to='/Notfound'>Notfound</Link></button>
  <button class="btn btn-sm btn-outline-secondary" type="button"><Link to='/Editprofile'>Edit Profile</Link></button>
  </form>
</nav>
</div>
  )
}

export default Navbar
