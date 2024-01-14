import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({ name, email, password });
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <section className="container flex justify-center items-center h-screen">
      <div className="w-full max-w-md p-8 bg-base-300 rounded shadow-md">
        <h1 className="text-4xl text-primary font-bold mb-4">Sign Up</h1>
        <p className="text-lg">
          <i className="fas fa-user" /> Create Your Account
        </p>
        <form className="mt-4 space-y-4" onSubmit={onSubmit}>
          <div>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={onChange}
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={onChange}
              className="input input-bordered w-full"
            />
            <small className="text-xs block mt-2">
              This site uses Gravatar, so if you want a profile image, use a
              Gravatar email.
            </small>
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={onChange}
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Confirm Password"
              name="password2"
              value={password2}
              onChange={onChange}
              className="input input-bordered w-full"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary w-full"
          >
            Register
          </button>
        </form>
        <p className="mt-4 text-sm">
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
      </div>
    </section>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, register })(Register);
