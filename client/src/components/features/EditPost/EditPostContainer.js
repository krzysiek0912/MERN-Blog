import { connect } from 'react-redux';
import { getEditPost, loadEditPostRequest } from '../../../redux/postsRedux';
import EditPost from './EditPost';
import { getRequest } from '../../../redux/requestReducer';

const mapStateToProps = state => ({
  postToEdit: getEditPost(state),
  request: getRequest(state),
});

const mapDispatchToProps = dispatch => ({
  loadEditPost: id => dispatch(loadEditPostRequest(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditPost);
