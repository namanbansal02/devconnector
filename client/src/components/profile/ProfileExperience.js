import React from 'react';
import PropTypes from 'prop-types';
import formatDate from '../../utils/formatDate';

const ProfileExperience = ({
  experience: { company, title, location, current, to, from, description }
}) => (
  <div className="container p-8 bg-base-200 rounded mb-6">
    <h3 className="text-xl font-bold text-dark">{company}</h3>
    <p className="text-gray-600">
      {formatDate(from)} - {to ? formatDate(to) : 'Now'}
    </p>
    <p className="">
      <strong className="font-semibold">Position:</strong> {title}
    </p>
    <p className="">
      <strong className="font-semibold">Location:</strong> {location}
    </p>
    <p className="">
      <strong className="font-semibold">Description:</strong> {description}
    </p>
  </div>
);

ProfileExperience.propTypes = {
  experience: PropTypes.object.isRequired
};

export default ProfileExperience;
