import React from 'react';
import "../Decorate/notFound.css"

function Notfound() {
  return (
    <div className="notfound-container">
      <h1 className="notfound-logo">404 Not Found</h1>
      <p className="notfound-message">The page you requested could not be found.</p>
    </div>
  );
}

export default Notfound;
