import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import renderer from 'react-test-renderer';

import {cityOffers, noop} from '../../mocks/tests-data';
import {Cities, AuthorizationStatus} from '../../const';
import reducer from '../../store/reducer';

import MainPage from './main-page';

const store = createStore(reducer);

const history = {
  push: noop,
};

it(`MainPage rendered correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <MainPage
            city={Cities[0]}
            cityOffers={cityOffers}
            history={history}
            logged={AuthorizationStatus.NO_AUTH}
            userData={null}
            onCityClick={noop}
            onOptionClick={noop}
          />
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
