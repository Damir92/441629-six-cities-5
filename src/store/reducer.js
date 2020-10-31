import {combineReducers} from 'redux';
import {siteData} from './reducers/site-data/site-data';

export const ReducerType = {
  STORE_OFFERS: `STORE_OFFERS`,
};

export default combineReducers({
  [ReducerType.STORE_OFFERS]: siteData,
});
