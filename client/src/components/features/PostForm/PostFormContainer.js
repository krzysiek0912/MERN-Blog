import { connect } from 'react-redux';
import { addPostRequest, getEditPost } from '../../../redux/postsRedux';
import { getRequest, resetRequestObj } from '../../../redux/requestReducer';
import PostForm from './PostForm';

const mapStateToProps = state => ({
  request: getRequest(state),
  editPost: getEditPost(state),
});

const mapDispatchToProps = dispatch => ({
  addPost: post => dispatch(addPostRequest(post)),
  resetRequestObj: typeRequest => dispatch(resetRequestObj(typeRequest)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostForm);
