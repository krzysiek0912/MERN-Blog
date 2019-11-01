import { connect } from 'react-redux';
import { getPosts, loadPostsRequest } from '../../../redux/postsRedux';
import { getRequest, resetRequestObj } from '../../../redux/requestReducer';
import Posts from './Posts';

const mapStateToProps = state => ({
  posts: getPosts(state),
  request: getRequest(state),
});

const mapDispatchToProps = dispatch => ({
  loadPosts: () => dispatch(loadPostsRequest()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Posts);
