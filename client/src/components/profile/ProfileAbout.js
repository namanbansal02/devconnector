import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const ProfileAbout = ({
  profile: {
    bio,
    skills,
    user: { name }
  }
}) => (
  <div className="profile-about bg-base-200 p-8 rounded-lg shadow-md">
    {bio && (
      <Fragment>
        <h2 className="text-2xl font-bold text-primary mb-4">
          {name.trim().split(' ')[0]}'s Bio
        </h2>
        <p className="text-light">{bio}</p>
        <div className="h-px my-4 bg-slate-600" />
      </Fragment>
    )}
    <h2 className="text-2xl font-bold text-primary">Skill Set</h2>
    <div className="flex flex-wrap mt-4">
      {skills.map((skill, index) => (
        <div key={index} className="py-3 px-4 bg-base-100 hover:border-base-300 transition-shadow hover:shadow-lg text-white rounded-full m-2">
         <i class="fa-solid fa-code-commit mr-3"></i>
          {skill}
        </div>
      ))}
    </div>
  </div>
);

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileAbout;
