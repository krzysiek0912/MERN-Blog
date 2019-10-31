import { connect } from 'react-redux';
import { getEditPost, getRequest, loadEditPostRequest } from '../../../redux/postsRedux';
import EditPost from './EditPost';

const mapStateToProps = state => ({
  editPost: getEditPost(state),
  request: getRequest(state),
});

const mapDispatchToProps = dispatch => ({
  loadEditPost: id => dispatch(loadEditPostRequest(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditPost);
