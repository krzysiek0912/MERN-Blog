import { connect } from 'react-redux';
import { getRequest, addPostRequest, resetRequestObj } from '../../../redux/postsRedux';
import PostForm from './PostForm';

const mapStateToProps = state => ({
  request: getRequest(state),
});

const mapDispatchToProps = dispatch => ({
  addPost: post => dispatch(addPostRequest(post)),
  resetRequestObj: () => dispatch(resetRequestObj()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostForm);
