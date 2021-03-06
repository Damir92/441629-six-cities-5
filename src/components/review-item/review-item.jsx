import React from 'react';
import PropTypes from 'prop-types';

import {ReviewPropTypes} from '../../prop-types';
import {convertRatingToPercent} from '../../utils';

const ReviewItem = ({review = {}}) => {
  const {
    avatar,
    date,
    dateHuman,
    name,
    rating,
    text,
  } = review;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatar} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: convertRatingToPercent(rating)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {text}
        </p>
        <time className="reviews__time" dateTime={date}>{dateHuman}</time>
      </div>
    </li>
  );
};

ReviewItem.propTypes = {
  review: PropTypes.shape(ReviewPropTypes).isRequired,
};

export default ReviewItem;
