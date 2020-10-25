import {PERCENT_PER_POINT_RATING, Sorting} from './const';

export const convertRatingToPercent = (value) => `${Math.round(value) * PERCENT_PER_POINT_RATING}%`;

export const updateObject = (a, b) => Object.assign({}, a, b);

export const sortOffers = (offers, type) => {
  switch (type) {
    case Sorting.PRICE_TO_HIGH:
      return [...offers.sort((a, b) => (a.price - b.price))];

    case Sorting.PRICE_TO_LOW:
      return [...offers.sort((a, b) => (b.price - a.price))];

    case Sorting.TOP_RATED:
      return [...offers.sort((a, b) => (b.rating - a.rating))];

    default:
      return offers;
  }
};
