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
    {isSingle ? <PageTitle>{title}</PageTitle> : <SmallTitle>{title}</SmallTitle>}
    <p>Author: {author}</p>
    <HtmlBox>{isSingle ? content : cutText(content, 50)}</HtmlBox>
    {!isSingle && (
      <Button variant="primary">
        <Link to={`/posts/${id}`}>Read more</Link>
      </Button>
    )}
  </article>
);

Post.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Post;
