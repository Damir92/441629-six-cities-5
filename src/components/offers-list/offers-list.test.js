import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import renderer from 'react-test-renderer';

import {cityOffers} from '../../mocks/tests-data';
import reducer from '../../store/reducer';

import OffersList from './offers-list';

const store = createStore(reducer);

jest.mock(`react-router-dom`, () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

describe(`Offers list rendered correctly`, () => {
  it(`It is main page`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <OffersList
              cityOffers={cityOffers}
              isMainPage={true}
            />
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`It is not main page`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <OffersList
              cityOffers={cityOffers}
              isMainPage={false}
            />
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
