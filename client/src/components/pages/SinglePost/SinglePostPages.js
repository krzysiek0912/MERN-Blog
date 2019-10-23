import React from 'react';
import Post from '../../features/Post/PostContainer';

const SinglePost = ({ match }) => (
  <div>
    <Post id={match.params.id} />
  </div>
);

export default SinglePost;
