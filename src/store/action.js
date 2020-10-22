export const ActionType = {
  SET_CITY: `SET_CITY`,
  GET_OFFERS: `GET_OFFERS`,
};

export const changeCityAction = (city) => ({
  type: ActionType.SET_CITY,
  payload: city,
});

export const getOffersAction = () => ({
  type: ActionType.GET_OFFERS,
});
