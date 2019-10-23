import React from 'react';
import Alert from '../../common/Alert/Alert';

class PostsCounter extends React.Component {
  render() {
    const { count, request } = this.props;
    const counter = count > 0 ? <>{count} Posts</> : <Alert variant="info"> No posts </Alert>;
    return <div>{!request.pending && counter}</div>;
  }
}

export default PostsCounter;
