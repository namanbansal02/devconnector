import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addComment } from '../../actions/post';

const CommentForm = ({ postId, addComment }) => {
  const [text, setText] = useState('');

  return (
    <div className='bg-base-200 p-8 rounded-md shadow-md my-4'>
      <h3 className='text-primary text-lg font-semibold mb-2'>Leave a Comment</h3>
      <form
        onSubmit={e => {
          e.preventDefault();
          addComment(postId, { text });
          setText('');
        }}
      >
        <textarea
          name='text'
          cols='30'
          rows='5'
          placeholder='Comment the post'
          value={text}
          onChange={e => setText(e.target.value)}
          className='w-full bg-base-300 rounded-md p-4 focus:border-base-300 mb-2'
          required
        />
        <button
          type='submit'
          className='btn btn-success px-5 text-md font-semibold hover:bg-green-600'
        >
          <i class="fa-solid fa-circle-check"></i>Submit
        </button>
      </form>
    </div>
  );
};

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired,
};

export default connect(
  null,
  { addComment }
)(CommentForm);
