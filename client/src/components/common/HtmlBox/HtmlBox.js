import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

const HtmlBox = ({ children, ...otherProps }) => (
  <div {...otherProps}>{ReactHtmlParser(children)}</div>
);

HtmlBox.propTypes = {
  children: PropTypes.string.isRequired,
};

export default HtmlBox;
