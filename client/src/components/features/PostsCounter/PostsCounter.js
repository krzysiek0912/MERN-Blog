import React from 'react';

class PostsCounter extends React.Component {
  render() {
    const { count } = this.props;
    const counter = count > 0 ? count : '- no posts -';
    return <div>{counter}</div>;
  }
}

export default PostsCounter;
