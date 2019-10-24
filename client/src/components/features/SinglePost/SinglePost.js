import React from 'react';
import { PropTypes } from 'prop-types';
import Post from '../Post/Post';
import Spinner from '../../common/Spinner/Spinner';
import NotFound from '../../pages/NotFound/NotFound';

class SinglePost extends React.Component {
  componentDidMount() {
    const { loadCurentPost, id } = this.props;
    loadCurentPost(id);
  }

  render() {
    const { curentPost, request } = this.props;

    return (
      <div>
        {(request.pending && <Spinner />) || (curentPost && <Post {...curentPost} isSingle />) || (
          <NotFound />
        )}
      </div>
    );
  }
}

SinglePost.propTypes = {
  loadCurentPost: PropTypes.func.isRequired,
};

export default SinglePost;
