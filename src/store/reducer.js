import {offers} from '../mocks/offers';
import {ActionType} from './action';
import {Cities, Sorting} from '../const';
import {updateObject, sortOffers} from '../utils';

const initialState = {
  activeCard: null,
  city: Cities[0],
  offers: offers[Cities[0]],
  sortingType: Sorting.POPULAR,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CITY:
      return updateObject(state, {
        city: action.payload,
        offers: offers[action.payload],
      });

    case ActionType.GET_OFFERS:
      return updateObject(state, {
        offers: offers[state.city],
      });

    case ActionType.SET_SORTING_TYPE:
      return updateObject(state, {
        sortingType: action.payload,
        offers: sortOffers(offers[state.city], action.payload),
      });

    case ActionType.SET_ACTIVE_CARD:
      return updateObject(state, {
        activeCard: action.payload,
      });
  }

  return state;
};
