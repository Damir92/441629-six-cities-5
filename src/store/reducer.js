import {combineReducers} from 'redux';

import {siteData} from './reducers/site-data/site-data';
import {user} from './reducers/user/user';

export const ReducerType = {
  STORE_OFFERS: `STORE_OFFERS`,
  STORE_USER: `STORE_USER`,
};

export default combineReducers({
  [ReducerType.STORE_OFFERS]: siteData,
  [ReducerType.STORE_USER]: user,
});
