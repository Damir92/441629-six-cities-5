import {ActionType} from '../../action';
import {Cities, Sorting} from '../../../const';
import {updateObject, sortOffers} from '../../../utils';

const initialState = {
  activeCard: null,
  city: Cities[0],
  cityOffers: [],
  offers: [],
  sortingType: Sorting.POPULAR,
};

export const siteData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_OFFERS:
      return updateObject(state, {
        cityOffers: state.offers.filter((item) => item.city.name === state.city),
      });

    case ActionType.LOAD_OFFERS:
      return updateObject(state, {
        offers: action.payload,
        cityOffers: action.payload.filter((item) => item.city.name === state.city),
      });

    case ActionType.SET_ACTIVE_CARD:
      return updateObject(state, {
        activeCard: action.payload,
      });

    case ActionType.SET_CITY:
      return updateObject(state, {
        city: action.payload,
        cityOffers: state.offers.filter((item) => item.city.name === action.payload),
      });

    case ActionType.SET_SORTING_TYPE:
      return updateObject(state, {
        sortingType: action.payload,
        cityOffers: sortOffers(state.offers[state.city], action.payload),
      });
  }

  return state;
};
