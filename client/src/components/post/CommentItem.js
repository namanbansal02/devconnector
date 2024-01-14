import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import formatDate from '../../utils/formatDate';
import { deleteComment } from '../../actions/post';

const CommentItem = ({
  postId,
  comment: { _id, text, name, avatar, user, date },
  auth,
  deleteComment
}) => (
  <div className="bg-base-200 p-8 rounded-md shadow-md my-4">
    <div className="flex items-center mb-2">
      <Link to={`/profile/${user}`} className="flex items-center">
        <img className="rounded-full h-8 w-8 mr-2" src={avatar} alt="" />
        <h4 className="text-primary">{name}</h4>
      </Link>
    </div>
    <div>
      <p className="my-2">{text}</p>
      <p className="text-gray-500">Posted on {formatDate(date)}</p>
      {!auth.loading && user === auth.user._id && (
        <button
          onClick={() => deleteComment(postId, _id)}
          type="button"
          className="btn btn-error my-2  px-5 text-md font-semibold hover:bg-red-600 "
        >
          <i class="fa-solid fa-trash"></i>Delete
        </button>
      )}
    </div>
  </div>
);

CommentItem.propTypes = {
  postId: PropTypes.string.isRequired,
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { deleteComment })(CommentItem);
