import React from 'react';
import { PropTypes } from 'prop-types';
import PostForm from '../PostForm/PostFormContainer';
import Spinner from '../../common/Spinner/Spinner';
import NotFound from '../../pages/NotFound/NotFound';

class EditPost extends React.Component {
  componentDidMount() {
    const { loadEditPost, id } = this.props;
    loadEditPost(id);
  }

  render() {
    const { editPost, request } = this.props;

    return (
      <div>
        {(request.pending && <Spinner />) ||
          (request.success && <PostForm postToEdit={editPost} />)}
      </div>
    );
  }
}

EditPost.propTypes = {
  loadEditPost: PropTypes.func.isRequired,
};

export default EditPost;
