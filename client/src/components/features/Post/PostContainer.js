import { connect } from 'react-redux';
import { getCurentPost, getRequest, loadCurentPostRequest } from '../../../redux/postsRedux';
import Post from './Post';

const mapStateToProps = state => ({
  curentPost: getCurentPost(state),
  request: getRequest(state),
});

const mapDispatchToProps = dispatch => ({
  loadCurentPost: id => dispatch(loadCurentPostRequest(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Post);
