import {
  loadOffersAction,
  loadActiveOfferAction,
  requireAuthorization,
  redirectToRoute,
  setLoggedUser
} from './action';

import {offersAdapter} from '../utils';
import {APIRoutes, AuthorizationStatus, Routes} from '../const';

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(APIRoutes.OFFERS)
    .then(({data}) => dispatch(loadOffersAction(offersAdapter(data))))
);

export const fetchActiveOffer = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoutes.OFFERS}/${id}`)
    .then(({data}) => dispatch(loadActiveOfferAction(data)))
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

// export const fetchComments = ()
