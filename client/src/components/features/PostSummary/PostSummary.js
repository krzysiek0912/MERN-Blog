import './PostSummary.scss';

import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../../common/Button/Button';
import SmallTitle from '../../common/SmallTitle/SmallTitle';
import PageTitle from '../../common/PageTitle/PageTitle';
import HtmlBox from '../../common/HtmlBox/HtmlBox';
import cutText from '../../../utils/cutText';

const PostSummary = ({ id, title, content, isSingle }) => (
  <article className="post-summary">
    {isSingle ? <PageTitle>{title}</PageTitle> : <SmallTitle>{title}</SmallTitle>}
    <HtmlBox>{isSingle ? content : cutText(content, 50)}</HtmlBox>
    {!isSingle && (
      <Button variant="primary">
        <Link to={`/posts/${id}`}>Read more</Link>
      </Button>
    )}
  </article>
);

PostSummary.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default PostSummary;