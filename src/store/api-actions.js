import {
  loadOffersAction,
  loadActiveOfferAction,
  requireAuthorization,
  redirectToRoute,
  setLoggedUser,
  loadReviewsAction,
  loadNearbyOffersAction,
} from './action';

import {offersAdapter, oneOfferAdapter, reviewAdapter} from '../utils';
import {APIRoutes, AuthorizationStatus, Routes} from '../const';

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(APIRoutes.OFFERS)
    .then(({data}) => dispatch(loadOffersAction(offersAdapter(data))))
);

export const fetchActiveOffer = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoutes.OFFERS}/${id}`)
    .then(({data}) => dispatch(loadActiveOfferAction(oneOfferAdapter(data))))
);

export const fetchNearbyOffers = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoutes.OFFERS}/${id}/nearby`)
    .then(({data}) => dispatch(loadNearbyOffersAction(offersAdapter(data))))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoutes.LOGIN)
    .then(({data}) => {
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(setLoggedUser(data));
    })
    .catch(() => dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)))
);

export const login = ({email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoutes.LOGIN, {email, password})
    .then(({data}) => {
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(setLoggedUser(data));
      dispatch(redirectToRoute(Routes.MAIN));
    })
);

export const fetchReviews = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoutes.REVIEWS}/${id}`)
    .then(({data}) => dispatch(loadReviewsAction(reviewAdapter(data))))
);

export const postReview = ({id, comment, rating}) => (dispatch, _getState, api) => (
  api.post(`${APIRoutes.REVIEWS}/${id}`, {comment, rating})
    .then(({data}) => dispatch(loadReviewsAction(reviewAdapter(data))))
);
