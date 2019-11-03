import { connect } from 'react-redux';
import { addPostRequest, editPostRequest } from '../../../redux/postsRedux';
import { getRequest, resetRequestObj } from '../../../redux/requestReducer';
import PostForm from './PostForm';

const mapStateToProps = state => ({
  request: getRequest(state),
});

const mapDispatchToProps = dispatch => ({
  addPost: post => dispatch(addPostRequest(post)),
  editPost: post => dispatch(editPostRequest(post)),
  resetRequestObj: typeRequest => dispatch(resetRequestObj(typeRequest)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostForm);
