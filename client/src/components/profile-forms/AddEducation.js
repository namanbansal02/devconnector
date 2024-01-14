import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addEducation } from '../../actions/profile';

const AddEducation = ({ addEducation }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    school: '',
    degree: '',
    fieldofstudy: '',
    from: '',
    to: '',
    current: false,
    description: ''
  });

  const { school, degree, fieldofstudy, from, to, description, current } =
    formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <section className="container mx-auto p-16">
      <h1 className="text-4xl text-primary font-bold mb-4">Add Your Education</h1>
      <p className="text-lg">
        <i className="fas fa-code-branch" /> Add any school or bootcamp that you
        have attended
      </p>
      <small className="text-sm text-gray-500">* = required field</small>
      <form
        className="mt-4 space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          addEducation(formData).then(() => navigate('/dashboard'));
        }}
      >
        <div className="form-group">
          <input
            type="text"
            placeholder="* School or Bootcamp"
            name="school"
            value={school}
            onChange={onChange}
            required
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="* Degree or Certificate"
            name="degree"
            value={degree}
            onChange={onChange}
            required
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Field of Study"
            name="fieldofstudy"
            value={fieldofstudy}
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
              onChange={() => setFormData({ ...formData, current: !current })}
            />{' '}
            Current School
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
            placeholder="Program Description"
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

AddEducation.propTypes = {
  addEducation: PropTypes.func.isRequired
};

export default connect(null, { addEducation })(AddEducation);
