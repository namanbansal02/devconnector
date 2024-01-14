import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../actions/post';

const PostForm = ({ addPost }) => {
  const [text, setText] = useState('');

  return (
    <div className="bg-base-200 p-8 my-4 rounded">
      <h3 className="text-white">Say Something...</h3>
      <form
        className="mt-4"
        onSubmit={(e) => {
          e.preventDefault();
          addPost({ text });
          setText('');
        }}
      >
        <textarea
          name="text"
          cols="30"
          rows="5"
          placeholder="Create a post"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
          className="w-full p-4  rounded bg-base-100"
        />
        <button type="submit" className="btn px-5 btn-success my-2">
        <i class="fa-solid fa-circle-check"></i> Submit
        </button>
      </form>
    </div>
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default connect(null, { addPost })(PostForm);
