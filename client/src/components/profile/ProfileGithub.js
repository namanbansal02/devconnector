import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getGithubRepos } from '../../actions/profile';

const ProfileGithub = ({ username, getGithubRepos, repos }) => {
  useEffect(() => {
    getGithubRepos(username);
  }, [getGithubRepos, username]);

  return (
    <div className="bg-base-200 p-8 rounded-lg shadow-md text-white">
      <h2 className="text-2xl font-bold text-primary ">Github Repos</h2>
      {repos.map(repo => (
        <div key={repo.id} className=" p-4 my-4 hover:bg-base-300 transition-all duration-300 hover:p-5 rounded hover:shadow-md">
          <div>
            <h4 className="text-xl font-semibold">
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                {repo.name}
              </a>
            </h4>
            <p className="text-gray-600">{repo.description}</p>
          </div>
          <div className="flex items-center justify-between mt-4">
            <ul className="flex gap-4">
              <li className="flex items-center">
                <span className="text-yellow-500 mr-1">Stars:</span> {repo.stargazers_count}
              </li>
              <li className="flex items-center">
                <span className="text-gray-500 mr-1">Watchers:</span> {repo.watchers_count}
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-1">Forks:</span> {repo.forks_count}
              </li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

ProfileGithub.propTypes = {
  getGithubRepos: PropTypes.func.isRequired,
  repos: PropTypes.array.isRequired,
  username: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  repos: state.profile.repos
});

export default connect(mapStateToProps, { getGithubRepos })(ProfileGithub);
