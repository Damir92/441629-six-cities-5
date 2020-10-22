import {updateObject} from '../utils';
import {offers} from '../mocks/offers';
import {ActionType} from './action';
import {Cities} from '../const';

const initialState = {
  city: Cities[0],
  offers: offers[Cities[0]],
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
  }

  return state;
};
