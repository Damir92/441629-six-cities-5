import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import renderer from 'react-test-renderer';

import reducer from '../../store/reducer';

import App from './app';

const store = createStore(reducer);

it(`App rendered correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <App />
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
