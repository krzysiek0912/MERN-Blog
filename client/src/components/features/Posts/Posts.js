import React from 'react';
import { PropTypes } from 'prop-types';

import PostsList from '../PostsList/PostsList';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';

class Posts extends React.Component {
  componentDidMount() {
    const { loadPosts } = this.props;
    loadPosts('requestPost');
  }

  // componentWillUnmount = () => {
  //   const { resetRequestObj } = this.props;
  // };

  render() {
    const { posts, request } = this.props;
    const { pending, error, success } = request.requestPost;
    let postsView;
    if (pending === false) {
      if (success === true && posts.length > 0) {
        postsView = <PostsList posts={posts} />;
      } else if (error !== null) {
        postsView = <Alert variant="error"> {error} </Alert>;
      }
    } else if (success === null) {
      postsView = <Spinner />;
    }
    return <div>{postsView}</div>;
  }
}

Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ).isRequired,
  loadPosts: PropTypes.func.isRequired,
};

export default Posts;
