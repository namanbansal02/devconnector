import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import ProfileItem from './ProfileItem';
import { getProfiles } from '../../actions/profile';

const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);

  return (
    <section className="container  mx-auto p-16">
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <h1 className="text-4xl text-primary font-bold mb-4">Developers</h1>
          <p className="text-lg my-3">
            <i className="fab fa-connectdevelop" /> Browse and connect with
            developers
          </p>
          <div className="flex flex-col gap-4">
            {profiles.length > 0 ? (
              profiles.map((profile) => (
                <ProfileItem key={profile._id} profile={profile} />
              ))
            ) : (
              <h4 className="text-lg text-gray-500">No profiles found...</h4>
            )}
          </div>
        </Fragment>
      )}
    </section>
  );
};

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  profile: state.profile
});

export default connect(mapStateToProps, { getProfiles })(Profiles);
