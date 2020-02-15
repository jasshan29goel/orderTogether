import React from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import PropTypes from 'prop-types';

const Navbar = ({logout,auth}) => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-success mb-3 py-0">
        <div className="container">
          <Link to="/" className="navbar-brand">
            orderTogether
          </Link >
          <div>
          {!auth.isAuthenticated  && (
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
          )}   
          {auth.isAuthenticated  && (
          <ul className="navbar-nav mr-auto">     
            <li >
              <Link className="nav-link" to="/"  onClick={logout}>
                Logout
                </Link>
              </li>
          </ul>
          )}             
          </div>
        </div>
      </nav>
    )
};
Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {  logout }
)(Navbar);