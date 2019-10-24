import React from 'react';
import { PropTypes } from 'prop-types';

import Post from '../Post/Post';

const PostsList = ({ posts }) => (
  <div>
    <section className="posts-list">
      {posts.map(post => (
        <Post key={post.id} {...post} />
      ))}
    </section>
  </div>
);

PostsList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default PostsList;
