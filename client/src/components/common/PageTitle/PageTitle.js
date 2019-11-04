import React from 'react';
import PropTypes from 'prop-types';

import './PageTitle.scss';

const PageTitle = ({ children }) => <h1 className="page-title">{children}</h1>;

PageTitle.defaultProps = {
  children: '',
};
PageTitle.propTypes = {
  children: PropTypes.string,
};

export default PageTitle;
