export const ActionType = {
  GET_OFFERS: `GET_OFFERS`,
  GET_SORTED_OFFERS: `GET_SORTED_OFFERS`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  LOAD_ACTIVE_OFFER: `LOAD_ACTIVE_OFFER`,
  LOAD_NEARBY_OFFERS: `LOAD_NEARBY_OFFERS`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  SET_ACTIVE_CARD: `SET_ACTIVE_CARD`,
  SET_CITY: `SET_CITY`,
  SET_SORTING_TYPE: `SET_SORTING_TYPE`,
  SET_LOGGED_USER: `SET_LOGGED_USER`,
  UNSET_ACTIVE_OFFER: `UNSET_ACTIVE_OFFER`,
};

export const changeCityAction = (city) => ({
  type: ActionType.SET_CITY,
  payload: city,
});

export const getOffersAction = () => ({
  type: ActionType.GET_OFFERS,
});

export const loadOffersAction = (offers) => ({
  type: ActionType.LOAD_OFFERS,
  payload: offers,
});

export const loadActiveOfferAction = (offer) => ({
  type: ActionType.LOAD_ACTIVE_OFFER,
  payload: offer,
});

export const loadNearbyOffersAction = (offers) => ({
  type: ActionType.LOAD_NEARBY_OFFERS,
  payload: offers,
});

export const loadReviewsAction = (reviews) => ({
  type: ActionType.LOAD_REVIEWS,
  payload: reviews,
});

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});

export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});

export const setSortingTypeAction = (sortingType) => ({
  type: ActionType.SET_SORTING_TYPE,
  payload: sortingType,
});

export const setActiveCard = (id) => ({
  type: ActionType.SET_ACTIVE_CARD,
  payload: id,
});

export const setLoggedUser = (email) => ({
  type: ActionType.SET_LOGGED_USER,
  payload: email,
});

export const unsetActiveOfferAction = () => ({
  type: ActionType.UNSET_ACTIVE_OFFER,
});
