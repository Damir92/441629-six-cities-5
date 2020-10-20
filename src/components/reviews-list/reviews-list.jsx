import React from 'react';
import PropTypes from 'prop-types';

import {ReviewPropTypes} from '../../prop-types';

import ReviewItem from '../review-item/review-item';

const ReviewsList = ({reviews = []}) => {
  return (
    <ul className="reviews__list">
      {reviews.map((item) => (
        <ReviewItem
          key={item.id}
          review={item}
        />
      ))}
    </ul>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
      PropTypes.shape(ReviewPropTypes).isRequired
  ).isRequired,
};

export default ReviewsList;
