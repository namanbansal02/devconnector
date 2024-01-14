import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    status,
    company,
    location,
    skills
  }
}) => {
  return (
    <div className="hover:border-base-100  bg-base-200 text-white rounded-xl overflow-hidden shadow-xl">
      <div className="flex items-center gap-2 p-8">
        <img src={avatar} alt={name} className="w-20 h-20 rounded-full mr-6 shadow-md" />
        <div className=''>
          <h2 className="text-2xl font-bold">{name}</h2>
          <p className="text-md my-1 text-slate-400">
            <i className="fas fa-briefcase"></i> {status} {company && <span> at {company}</span>}
          </p>
          {location && <p className="text-md my-1 text-slate-400"><i className="fas fa-map-marker-alt"></i> {location}</p>}
          <Link to={`/profile/${_id}`} className="btn btn-info rounded-full my-2 ">
            <i className="fas fa-eye mr-2"></i> View Profile
          </Link>
        </div>
      </div>
      <ul className="flex items-center justify-end bg-base-300 p-4 space-x-2">
        {skills.slice(0, 4).map((skill, index) => (
          <li
            key={index}
            className="text-primary bg-base-300 px-3 py-1 rounded-full hover:bg-base-100 hover:px-5 hover:shadow-xl transition-all duration-30"
          >
            <i className="fas fa-code mr-1"></i> {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
