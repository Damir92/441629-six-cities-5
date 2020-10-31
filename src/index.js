import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import reducer from './store/reducer';
import {createAPI} from './services/api';
import {fetchOffersList} from './store/api-actions';
import {getOffersAction} from './store/action';

import App from './components/app/app';

const api = createAPI(
    () => store.dispatch()
);

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

Promise.all([
  store.dispatch(fetchOffersList()),
])
.then([
  store.dispatch(getOffersAction()),
])
.then(() => {
  ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.querySelector(`#root`)
  );
});
