import React from 'react';
import { PropTypes } from 'prop-types';
import Post from '../Post/Post';
import Spinner from '../../common/Spinner/Spinner';
import NotFound from '../../pages/NotFound/NotFound';

class SinglePost extends React.Component {
  componentDidMount() {
    const { loadRandomPost, id } = this.props;
    loadRandomPost(id);
  }

  render() {
    const { randomPost, request } = this.props;
    const { pending } = request.requestPost;
    return (
      <div>
        {(pending && <Spinner />) || (randomPost && <Post {...randomPost} isSingle />) || (
          <NotFound />
        )}
      </div>
    );
  }
}

SinglePost.propTypes = {
  loadRandomPost: PropTypes.func.isRequired,
};

export default SinglePost;
