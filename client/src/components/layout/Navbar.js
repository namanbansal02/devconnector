import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated }, logout }) => {
  const authLinks = (
    <ul className="menu menu-horizontal px-1 ">
      <li>
        <Link className="btn btn-ghost text-lg" to="/profiles">
          Developers
        </Link>
      </li>
      <li>
        <Link className="btn btn-ghost text-lg" to="/posts">
          Posts
        </Link>
      </li>
      <li>
        <Link className="btn btn-ghost text-lg" to="/dashboard">
          <i className="fas fa-user" /> Dashboard
        </Link>
      </li>
      <li>
        <a onClick={logout} href="#!" className="btn btn-ghost text-lg">
          <i className="fas fa-sign-out-alt" /> Logout
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul className="menu menu-horizontal px-1 hidden lg:flex">
      <li>
        <Link className="btn btn-ghost text-xl" to="/profiles">
          Developers
        </Link>
      </li>
      <li>
        <Link className="btn btn-ghost text-xl" to="/register">
          Register
        </Link>
      </li>
      <li>
        <Link className="btn btn-ghost text-xl" to="/login">
          Login
        </Link>
      </li>
    </ul>
  );

  return (
    <nav className="navbar bg-base-100 shadow-lg px-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <Link className="btn btn-ghost text-xl" to="/profiles">
                Developers
              </Link>
            </li>
            <li>
              <Link className="btn btn-ghost text-xl" to="/register">
                Register
              </Link>
            </li>
            <li>
              <Link className="btn btn-ghost text-xl" to="/login">
                Login
              </Link>
            </li>
          </ul>
        </div>
        <Link className="btn btn-ghost text-xl" to='/'>
          <i className="fas fa-code" /> DevHub
        </Link>
      </div>
      <div className="flex-none navbar-end">
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
