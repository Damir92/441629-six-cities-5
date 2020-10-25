export const ActionType = {
  SET_CITY: `SET_CITY`,
  GET_OFFERS: `GET_OFFERS`,
  SET_SORTING_TYPE: `SET_SORTING_TYPE`,
  GET_SORTED_OFFERS: `GET_SORTED_OFFERS`,
  SET_ACTIVE_CARD: `SET_ACTIVE_CARD`,
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
