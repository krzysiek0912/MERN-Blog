import { connect } from 'react-redux';
import { getPosts, getRequest, loadPostsRequest, resetRequestObj } from '../../../redux/postsRedux';
import Posts from './Posts';

const mapStateToProps = state => ({
  posts: getPosts(state),
  request: getRequest(state),
});

const mapDispatchToProps = dispatch => ({
  loadPosts: () => dispatch(loadPostsRequest()),
  resetRequestObj: () => dispatch(resetRequestObj()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Posts);
