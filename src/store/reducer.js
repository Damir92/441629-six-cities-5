import {combineReducers} from 'redux';
import {siteData} from './reducers/site-data/site-data';

export const NameSpace = {
  STORE_OFFERS: `STORE_OFFERS`,
};

export default combineReducers({
  [NameSpace.STORE_OFFERS]: siteData,
});
