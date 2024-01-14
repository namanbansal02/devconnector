import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DashboardActions from './DashboardActions';
import Experience from './Experience';
import Education from './Education';
import { getCurrentProfile, deleteAccount } from '../../actions/profile';

const Dashboard = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: { profile }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return (
    <section className="container mx-auto p-16">
      <h1 className="text-4xl font-bold text-primary mb-4">Dashboard</h1>
      <p className="text-lg">
        <i className="fas fa-user" /> Welcome {user && user.name}
      </p>
      {profile !== null ? (
        <div className="mt-8">
          <DashboardActions />

          <div className="mt-8">
            <h2 className="text-2xl text-primary mb-4 font-bold">Experience</h2>
            <Experience experience={profile.experience} />
          </div>

          <div className="mt-8">
            <h2 className="text-2xl text-primary mb-4 font-bold">Education</h2>
            <Education education={profile.education} />
          </div>

          <div className="mt-8">
            <button
              className="btn btn-danger"
              onClick={() => deleteAccount()}
            >
              <i className="fas fa-user-minus" /> Delete My Account
            </button>
          </div>
        </div>
      ) : (
        <div className="mt-8">
          <p className="text-lg">
            You have not yet set up a profile. Please add some information.
          </p>
          <Link to="/create-profile" className="btn btn-primary mt-4">
            Create Profile
          </Link>
        </div>
      )}
    </section>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Dashboard
);
