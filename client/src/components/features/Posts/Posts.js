import React from 'react';
import { PropTypes } from 'prop-types';

import PostsList from '../PostsList/PostsList';
import Pagination from '../../common/Pagination/Pagination';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';

class Posts extends React.Component {
  componentDidMount() {
    const { loadPostsByPage } = this.props;
    loadPostsByPage(1);
  }

  loadPostsPage = page => {
    const { loadPostsByPage } = this.props;
    loadPostsByPage(page);
  };

  render() {
    const { loadPostsPage } = this;
    const { posts, request, pages, presentPage } = this.props;
    const { pending, error, success } = request.requestPost;
    let postsView;
    if (pending === false) {
      if (success === true) {
        postsView = (
          <>
            <PostsList posts={posts} />
            <Pagination pages={pages} onPageChange={loadPostsPage} initialPage={presentPage} />
          </>
        );
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
  loadPostsByPage: PropTypes.func.isRequired,
};

export default Posts;
