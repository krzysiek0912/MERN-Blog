import { connect } from 'react-redux';
import {
  getPosts,
  // loadPostsRequest,
  loadPostsByPageRequest,
  getPages,
  getCurentPages,
} from '../../../redux/postsRedux';
import { getRequest } from '../../../redux/requestReducer';
import Posts from './Posts';

const mapStateToProps = state => ({
  posts: getPosts(state),
  request: getRequest(state),
  pages: getPages(state),
  presentPage: getCurentPages(state),
});

const mapDispatchToProps = dispatch => ({
  loadPostsByPage: page => dispatch(loadPostsByPageRequest(page)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Posts);
