import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import formatDate from '../../utils/formatDate';
import { connect } from 'react-redux';
import { addLike, removeLike, deletePost } from '../../actions/post';

const PostItem = ({
  addLike,
  removeLike,
  deletePost,
  auth,
  post: { _id, text, name, avatar, user, likes, comments, date },
}) => (
  <div className="bg-base-200 shadow-sm hover:shadow-lg p-8 my-4 border-base-300 rounded-lg">
    <div className="flex items-center">
      <Link to={`/profile/${user}`}>
        <img className="rounded-full h-12 w-12 mr-4" src={avatar} alt={name} />
      </Link>
      <div>
        <Link to={`/profile/${user}`} className="text-lg font-semibold">
          {name}
        </Link>
        <p className="text-gray-500">Posted on {formatDate(date)}</p>
      </div>
    </div>
    <div className="mt-4">
      <p className="my-2">{text}</p>

      <div className="flex items-center space-x-4 gap-4">
        <button
          onClick={() => addLike(_id)}
          type="button"
          className="flex items-center text-gray-500 hover:text-primary"
        >
          <i className="fas fa-thumbs-up" /> 
          {likes.length > 0 && <span className="ml-1">{likes.length}</span>}
        </button>

        <button
          onClick={() => removeLike(_id)}
          type="button"
          className="flex items-center text-gray-500 hover:text-primary"
        >
          <i className="fas fa-thumbs-down" />
        </button>

        <Link
          to={`/posts/${_id}`}
          className="btn btn-success flex items-center"
        >
          Discussion{' '}
          {comments.length > 0 && (
            <span className="ml-1">{comments.length}</span>
          )}
        </Link>

        {!auth.loading && user === auth.user._id && (
          <button
            onClick={() => deletePost(_id)}
            type="button"
            className="btn btn-error my-2  px-5 text-md font-semibold hover:bg-red-600 "
        >
          <i class="fa-solid fa-trash"></i>Delete
        </button>
        )}
      </div>
    </div>
  </div>
);

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { addLike, removeLike, deletePost })(
  PostItem
);
