import {PERCENT_PER_POINT_RATING} from './const';

export const convertRatingToPercent = (value) => `${Math.round(value) * PERCENT_PER_POINT_RATING}%`;
