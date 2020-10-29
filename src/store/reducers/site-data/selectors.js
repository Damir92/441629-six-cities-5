import {createSelector} from 'reselect';

import {NameSpace} from '../../reducer';
import {sortOffers} from '../../../utils';

const NAME_SPACE = NameSpace.STORE_OFFERS;

export const getOffers = (state) => state[NAME_SPACE].offers;

export const getCity = (state) => state[NAME_SPACE].city;

export const getActiveCard = (state) => state[NAME_SPACE].activeCard;

export const getSortingType = (state) => state[NAME_SPACE].sortingType;

export const getCityOffers = createSelector(
    getOffers,
    getCity,
    (resultOne, resultTwo) => resultOne.filter((it) => it.city.name === resultTwo)
);

export const getSortedOffers = createSelector(
    getOffers,
    getCity,
    getSortingType,
    (resultOne, resultTwo, resultThree) => sortOffers(resultOne.filter((it) => it.city.name === resultTwo), resultThree)
);
