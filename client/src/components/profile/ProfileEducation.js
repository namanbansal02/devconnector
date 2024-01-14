import React from 'react';
import PropTypes from 'prop-types';
import formatDate from '../../utils/formatDate';

const ProfileEducation = ({
  education: { school, degree, fieldofstudy, current, to, from, description }
}) => (
  <div className="container p-8 hover:bg-base-300 transition-all duration-300 hover:p-9 rounded hover:shadow-md mb-6">
    <h3 className="text-xl font-bold text-dark">{school}</h3>
    <p className="text-gray-600">
      {formatDate(from)} - {to ? formatDate(to) : 'Now'}
    </p>
    <p className="">
      <strong className="font-semibold">Degree:</strong> {degree}
    </p>
    <p className="">
      <strong className="font-semibold">Field of Study:</strong> {fieldofstudy}
    </p>
    <p className="">
      <strong className="font-semibold">Description:</strong> {description}
    </p>
  </div>
);

ProfileEducation.propTypes = {
  education: PropTypes.object.isRequired
};

export default ProfileEducation;
