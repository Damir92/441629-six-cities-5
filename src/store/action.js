export const ActionType = {
  GET_OFFERS: `GET_OFFERS`,
  GET_SORTED_OFFERS: `GET_SORTED_OFFERS`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  SET_ACTIVE_CARD: `SET_ACTIVE_CARD`,
  SET_CITY: `SET_CITY`,
  SET_SORTING_TYPE: `SET_SORTING_TYPE`,
};

export const changeCityAction = (city) => ({
  type: ActionType.SET_CITY,
  payload: city,
});

export const getOffersAction = () => ({
  type: ActionType.GET_OFFERS,
});

export const setSortingTypeAction = (sortingType) => ({
  type: ActionType.SET_SORTING_TYPE,
  payload: sortingType,
});

export const setActiveCard = (id) => ({
  type: ActionType.SET_ACTIVE_CARD,
  payload: id,
});

export const loadOffersAction = (offers) => ({
  type: ActionType.LOAD_OFFERS,
  payload: offers,
});
