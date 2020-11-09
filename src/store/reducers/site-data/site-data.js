import {ActionType} from '../../action';
import {Cities, Sorting} from '../../../const';
import {updateObject} from '../../../utils';

const initialState = {
  activeCard: null,
  activeOffer: {},
  city: Cities[0],
  reviews: [],
  offers: [],
  sortingType: Sorting.POPULAR,
};

export const siteData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return updateObject(state, {
        offers: action.payload,
      });

    case ActionType.LOAD_ACTIVE_OFFER:
      return updateObject(state, {
        activeOffer: action.payload,
      });

    case ActionType.LOAD_REVIEWS:
      return updateObject(state, {
        reviews: action.payload,
      });

    case ActionType.SET_ACTIVE_CARD:
      return updateObject(state, {
        activeCard: action.payload,
      });

    case ActionType.SET_CITY:
      return updateObject(state, {
        city: action.payload,
      });

    case ActionType.SET_SORTING_TYPE:
      return updateObject(state, {
        sortingType: action.payload,
      });

    case ActionType.UNSET_ACTIVE_OFFER:
      return updateObject(state, {
        activeOffer: {},
      });
  }

  return state;
};
