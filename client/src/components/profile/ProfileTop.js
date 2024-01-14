import React from 'react';
import PropTypes from 'prop-types';

const ProfileTop = ({
  profile: {
    status,
    company,
    location,
    website,
    social,
    user: { name, avatar }
  }
}) => {
  return (
    <div className="profile-top bg-base-200 p-8 rounded-lg shadow-md text-white text-center">
      <img className="rounded-full w-20 h-20 mx-auto mb-4" src={avatar} alt="" />
      <h1 className="text-3xl font-bold mb-2">{name}</h1>
      <p className="text-lg">
        {status} {company && <span className="text-gray-400">at {company}</span>}
      </p>
      <p className="text-lg">{location && <span>{location}</span>}</p>
      <div className="flex bg-base-300 py-4 rounded items-center justify-center text-center my-4">
        {website && (
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white mr-5"
          >
            <i className="fas fa-globe fa-lg" />
          </a>
        )}
        {social &&
          Object.entries(social)
            .filter(([_, value]) => value)
            .map(([key, value]) => (
              <a
                key={key}
                href={value}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white mr-5"
              >
                <i className={`fab fa-${key} fa-lg`}></i>
              </a>
            ))}
      </div>
    </div>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileTop;
