import React from 'react';

import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-success mb-3 py-0">
        <div className="container">
          <Link to="/" className="navbar-brand">
            orderTogether
          </Link >
          <div>
  
          <ul className="navbar-nav mr-auto">
      <li className="nav-item">
      <Link className="nav-link" to="/login"  >
      Login     
      </Link>                         
      </li>
      <li>
      <Link className="nav-link" to="/register"  >
      Register     
      </Link>                         
      </li>
    </ul>
        
          </div>
        </div>
      </nav>
    )
};
export default Navbar;