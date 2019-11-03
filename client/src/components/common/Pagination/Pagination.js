import React from 'react';
import PropTypes from 'prop-types';

import './Pagination.scss';

class Pagination extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      presentPage: props.initialPage || 1,
    };
  }

  changePage = newPage => {
    const { onPageChange } = this.props;

    this.setState({ presentPage: newPage });
    onPageChange(newPage);
  };

  render() {
    const { pages } = this.props;
    const { presentPage } = this.state;
    const { changePage } = this;

    const ArrowLeft = (
      <li
        className="pagination__list__item"
        onClick={() => {
          changePage(presentPage - 1);
        }}
      >
        {' <'}
      </li>
    );

    const PaginationList = [...Array(pages)].map((el, page) => {
      return (
        <li
          key={++page}
          onClick={() => {
            changePage(page);
          }}
          className={`pagination__list__item${
            page === presentPage ? ' pagination__list__item--active' : ''
          }`}
        >
          {page}
        </li>
      );
    });

    const ArrowRight = (
      <li
        className="pagination__list__item"
        onClick={() => {
          changePage(presentPage + 1);
        }}
      >
        {' >'}
      </li>
    );

    return (
      <div className="pagination">
        <ul className="pagination__list">
          {presentPage > 1 && ArrowLeft}
          {PaginationList}
          {presentPage < pages && ArrowRight}
        </ul>
      </div>
    );
  }
}

Pagination.propTypes = {
  pages: PropTypes.number.isRequired,
  initialPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
