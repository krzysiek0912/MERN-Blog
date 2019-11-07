import React from 'react';

const Rating = ({ rating, ratingAdd, ratingSub }) => (
  <span>
    <button type="button" onClick={ratingAdd}>
      +
    </button>
    {rating}
    <button type="button" onClick={ratingSub}>
      -
    </button>
  </span>
);

export default Rating;
