import './Post.scss';

import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../../common/Button/Button';
import SmallTitle from '../../common/SmallTitle/SmallTitle';
import PageTitle from '../../common/PageTitle/PageTitle';
import HtmlBox from '../../common/HtmlBox/HtmlBox';
import cutText from '../../../utils/cutText';

const Post = ({ id, title, content, author, isSingle }) => (
  <article className="post-summary">
    {isSingle && <PageTitle>{title}</PageTitle>}
    {!isSingle && <SmallTitle>{title}</SmallTitle>}
    <p>Author: {author}</p>
    <HtmlBox>{isSingle ? content : cutText(content, 50)}</HtmlBox>
    {!isSingle && (
      <>
        <Button variant="primary">
          <Link to={`/posts/${id}`}>Read more</Link>
        </Button>
        <Button variant="primary">
          <Link to={`/posts/edit/${id}`}>Edit</Link>
        </Button>
      </>
    )}
  </article>
);

Post.defaultProps = {
  id: '',
  title: '',
  content: '',
};

Post.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
};

export default Post;
