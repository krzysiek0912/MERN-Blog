import { connect } from 'react-redux';
import { getPostsCount, getRequest } from '../../../redux/postsRedux';
import PostsCounter from './PostsCounter';

const mapStateToProps = state => ({
  count: getPostsCount(state),
  request: getRequest(state),
});

export default connect(mapStateToProps)(PostsCounter);
