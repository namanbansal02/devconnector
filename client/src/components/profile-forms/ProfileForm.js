import React, { Fragment, useState, useEffect } from 'react';
import { Link, useMatch, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile } from '../../actions/profile';

/*
  NOTE: declare initialState outside of component
  so that it doesn't trigger a useEffect
  we can then safely use this to construct our profileData
 */
const initialState = {
  company: '',
  website: '',
  location: '',
  status: '',
  skills: '',
  githubusername: '',
  bio: '',
  twitter: '',
  facebook: '',
  linkedin: '',
  youtube: '',
  instagram: ''
};

const ProfileForm = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile
}) => {
  const [formData, setFormData] = useState(initialState);

  const creatingProfile = useMatch('/create-profile');

  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    // if there is no profile, attempt to fetch one
    if (!profile) getCurrentProfile();

    // if we finished loading and we do have a profile
    // then build our profileData
    if (!loading && profile) {
      const profileData = { ...initialState };
      for (const key in profile) {
        if (key in profileData) profileData[key] = profile[key];
      }
      for (const key in profile.social) {
        if (key in profileData) profileData[key] = profile.social[key];
      }
      // the skills may be an array from our API response
      if (Array.isArray(profileData.skills))
        profileData.skills = profileData.skills.join(', ');
      // set local state with the profileData
      setFormData(profileData);
    }
  }, [loading, getCurrentProfile, profile]);

  const {
    company,
    website,
    location,
    status,
    skills,
    githubusername,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    const editing = profile ? true : false;
    e.preventDefault();
    createProfile(formData, editing).then(() => {
      if (!editing) navigate('/dashboard');
    });
  };

  return (
    <section className="container mx-auto p-16">
      <h1 className="text-4xl text-primary font-bold mb-4">
        {creatingProfile ? 'Create Your Profile' : 'Edit Your Profile'}
      </h1>
      <p className="text-lg">
        <i className="fas fa-user" />
        {creatingProfile
          ? ` Let's get some information to make your`
          : ' Add some changes to your profile'}
      </p>
      <small className="text-sm text-gray-500">* = required field</small>
      <form   className="mt-4 space-y-4" onSubmit={onSubmit}>
        <div className="form-group">
          <select name="status"     className="input input-bordered w-full" value={status} onChange={onChange}>
            <option>* Select Professional Status</option>
            <option value="Developer">Developer</option>
            <option value="Junior Developer">Junior Developer</option>
            <option value="Senior Developer">Senior Developer</option>
            <option value="Manager">Manager</option>
            <option value="Student or Learning">Student or Learning</option>
            <option value="Instructor">Instructor or Teacher</option>
            <option value="Intern">Intern</option>
            <option value="Other">Other</option>
          </select>
            <small className="text-sm text-gray-500">
            Give us an idea of where you are at in your career
          </small>
        </div>
        <div className="form-group">
          <input
            className="input input-bordered w-full"
            type="text"
            placeholder="Company"
            name="company"
            value={company}
            onChange={onChange}
          />
            <small className="text-sm text-gray-500">
            Could be your own company or one you work for
          </small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Website"
            name="website"
            value={website}
            onChange={onChange}
            className="input input-bordered w-full"
          />
            <small className="text-sm text-gray-500">
            Could be your own or a company website
          </small>
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
            <small className="text-sm text-gray-500">
            City & state suggested (eg. Boston, MA)
          </small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="* Skills"
            name="skills"
            value={skills}
            onChange={onChange}
            className="input input-bordered w-full"
          />
            <small className="text-sm text-gray-500">
            Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)
          </small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Github Username"
            name="githubusername"
            value={githubusername}
            onChange={onChange}
            className="input input-bordered w-full"
          />
            <small className="text-sm text-gray-500">
            If you want your latest repos and a Github link, include your
            username
          </small>
        </div>
        <div className="form-group">
          <textarea
            placeholder="A short bio of yourself"
            name="bio"
            value={bio}
            onChange={onChange}
            className="textarea textarea-bordered w-full"
          />
            <small className="text-sm text-gray-500">Tell us a little about yourself</small>
        </div>

        <div className="my-2">
          <button
            onClick={() => toggleSocialInputs(!displaySocialInputs)}
            type="button"
            className="btn btn-light"
          >
            Add Social Network Links
          </button>
          <span>Optional</span>
        </div>

        {displaySocialInputs && (
          <Fragment>
            <div className="flex gap-5" >
              <i className="fab fa-twitter fa-2x" />
              <input
                type="text"
                placeholder="Twitter URL"
                name="twitter"
                value={twitter}
                onChange={onChange}
                className="input input-bordered w-full"
              />
            </div>

            <div className="flex gap-5" >
              <i className="fab fa-facebook fa-2x" />
              <input
                type="text"
                placeholder="Facebook URL"
                name="facebook"
                value={facebook}
                onChange={onChange}
                className="input input-bordered w-full"
              />
            </div>

            <div className="flex gap-5" >
              <i className="fab fa-youtube fa-2x" />
              <input
                type="text"
                placeholder="YouTube URL"
                className="input input-bordered w-full"
                name="youtube"
                value={youtube}
                onChange={onChange}
              />
            </div>

            <div className="flex gap-5" >
              <i className="fab fa-linkedin fa-2x" />
              <input
                type="text"
                placeholder="Linkedin URL"
                className="input input-bordered w-full"
                name="linkedin"
                value={linkedin}
                onChange={onChange}
              />
            </div>

            <div className="flex gap-5" >
              <i className="fab fa-instagram fa-2x" />
              <input
                type="text"
                placeholder="Instagram URL"
                className="input input-bordered w-full"
                name="instagram"
                value={instagram}
                onChange={onChange}
              />
            </div>
          </Fragment>
        )}

          <input type="submit" className="btn btn-primary w-full" />
        <Link className="btn btn-light w-full mt-2" to="/dashboard">
          Go Back
        </Link>
      </form>
    </section>
  );
};

ProfileForm.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  profile: state.profile
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  ProfileForm
);