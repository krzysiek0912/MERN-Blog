import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import Editor from 'react-medium-editor';
import TextField from '../../common/TextField/TextField';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import Button from '../../common/Button/Button';
import Alert from '../../common/Alert/Alert';
import Spinner from '../../common/Spinner/Spinner';
import 'medium-editor/dist/css/medium-editor.css';
import 'medium-editor/dist/css/themes/default.css';
import './PostForm.scss';

class PostForm extends React.Component {
  state = {
    post: {
      title: '',
      author: '',
      content: '',
    },
  };

  componentWillUnmount = () => {
    const { resetRequestObj } = this.props;
    resetRequestObj();
  };

  handleChange = e => {
    const { post } = this.state;
    this.setState({ post: { ...post, [e.target.name]: e.target.value } });
  };

  handleEditor = text => {
    const { post } = this.state;
    this.setState({ post: { ...post, content: text } });
  };

  addPost = e => {
    const { addPost } = this.props;
    const { post } = this.state;

    e.preventDefault();
    addPost(post);
  };

  render() {
    const { post } = this.state;
    const { handleChange, handleEditor, addPost } = this;
    const { request } = this.props;

    if (request.error) return <Alert variant="error">{request.error}</Alert>;
    if (request.success) return <Alert variant="success">Post has been added!</Alert>;
    if (request.pending) return <Spinner />;
    return (
      <form onSubmit={addPost}>
        <TextField label="Title" value={post.title} onChange={handleChange} name="title" />

        <TextField label="Author" value={post.author} onChange={handleChange} name="author" />

        <SectionTitle>Edit post content</SectionTitle>

        <Editor
          className="content-editor"
          text={post.content}
          onChange={handleEditor}
          options={{
            placeholder: false,
            toolbar: { buttons: ['bold', 'italic', 'underline', 'anchor', 'h2', 'h3'] },
          }}
        />

        <Button type="submit" variant="primary">
          Add post
        </Button>
      </form>
    );
  }
}

PostForm.propTypes = {
  request: PropTypes.shape({
    pending: PropTypes.bool,
    error: PropTypes.bool,
    success: PropTypes.bool,
  }).isRequired,
  addPost: PropTypes.func.isRequired,
};

export default PostForm;