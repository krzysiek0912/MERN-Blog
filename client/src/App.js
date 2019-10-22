import React from 'react';

class App extends React.Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    fetch('http://localhost:8000/api/posts')
      .then(res => res.json())
      .then(res => {
        this.setState({ posts: res });
      });
  }

  render() {
    const { posts } = this.state;
    return (
      <div>
        <ul>
          {posts.map(post => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
