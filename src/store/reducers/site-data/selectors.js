import {createSelector} from 'reselect';

import {ReducerType} from '../../reducer';
import {sortOffers} from '../../../utils';

const REDUCER_DATA = ReducerType.STORE_OFFERS;

export const getOffers = (state) => state[REDUCER_DATA].offers;

export const getCity = (state) => state[REDUCER_DATA].city;

export const getActiveCard = (state) => state[REDUCER_DATA].activeCard;

export const getActiveOffer = (state) => state[REDUCER_DATA].activeOffer;

export const getReviews = (state) => state[REDUCER_DATA].reviews.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export const getSortingType = (state) => state[REDUCER_DATA].sortingType;

export const getCityOffers = createSelector(
    getOffers,
    getCity,
    (offers, city) => offers.filter((it) => it.city.name === city)
);

export const getSortedOffers = createSelector(
    getOffers,
    getCity,
    getSortingType,
    (offers, city, sortingType) => sortOffers(offers.filter((it) => it.city.name === city), sortingType)
);
