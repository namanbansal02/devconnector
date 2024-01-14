import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExperience } from '../../actions/profile';

const AddExperience = ({ addExperience }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    company: '',
    title: '',
    location: '',
    from: '',
    to: '',
    current: false,
    description: ''
  });

  const { company, title, location, from, to, current, description } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <section className="container mx-auto p-16">
      <h1 className="text-4xl text-primary font-bold mb-4">Add An Experience</h1>
      <p className="text-lg">
        <i className="fas fa-code-branch" /> Add any developer/programming
        positions that you have had in the past
      </p>
      <small className="text-sm text-gray-500">* = required field</small>
      <form
        className="mt-4 space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          addExperience(formData).then(() => navigate('/dashboard'));
        }}
      >
        <div className="form-group">
          <input
            type="text"
            placeholder="* Job Title"
            name="title"
            value={title}
            onChange={onChange}
            required
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="* Company"
            name="company"
            value={company}
            onChange={onChange}
            required
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Location"
            name="location"
            value={location}
            onChange={onChange}
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-group">
          <h4 className="text-lg font-bold">From Date</h4>
          <input
            type="date"
            name="from"
            value={from}
            onChange={onChange}
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-group">
          <p>
            <input
              type="checkbox"
              name="current"
              checked={current}
              value={current}
              onChange={() => {
                setFormData({ ...formData, current: !current });
              }}
            />{' '}
            Current Job
          </p>
        </div>
        <div className="form-group">
          <h4 className="text-lg font-bold">To Date</h4>
          <input
            type="date"
            name="to"
            value={to}
            onChange={onChange}
            disabled={current}
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-group">
          <textarea
            name="description"
            cols="30"
            rows="5"
            placeholder="Job Description"
            value={description}
            onChange={onChange}
            className="textarea textarea-bordered w-full"
          />
        </div>
        <button type="submit" className="btn btn-primary w-full">
          Submit
        </button>
        <Link to="/dashboard" className="btn btn-light w-full">
          Go Back
        </Link>
      </form>
    </section>
  );
};

AddExperience.propTypes = {
  addExperience: PropTypes.func.isRequired
};

export default connect(null, { addExperience })(AddExperience);
