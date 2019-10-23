import React from 'react';
import { PropTypes } from 'prop-types';
import PostSummary from '../PostSummary/PostSummary';
import Spinner from '../../common/Spinner/Spinner';
import NotFound from '../../pages/NotFound/NotFound';

class Post extends React.Component {
  componentDidMount() {
    const { loadCurentPost, id } = this.props;
    loadCurentPost(id);
  }

  render() {
    const { curentPost, request } = this.props;

    return (
      <div>
        {(request.pending && <Spinner />) ||
          (curentPost && <PostSummary {...curentPost} isSingle />) || <NotFound />}
      </div>
    );
  }
}

Post.propTypes = {
  loadCurentPost: PropTypes.func.isRequired,
};

export default Post;
