import {loadOffersAction} from './action';

import {offersAdapter} from '../utils';
import {APIRoutes} from '../const';

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(APIRoutes.OFFERS)
    .then(({data}) => dispatch(loadOffersAction(offersAdapter(data))))
);
