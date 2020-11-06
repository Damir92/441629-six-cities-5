import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import renderer from 'react-test-renderer';

import {cityOffers, offer, noop, reviews} from '../../mocks/tests-data';
import reducer from '../../store/reducer';

import OfferPage from './offer-page';

const store = createStore(reducer);

const history = {
  push: noop,
};

const match = {
  params: {
    id: 0,
  },
};

describe(`Offer page rendered correctly`, () => {
  it(`It is main page`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <OfferPage
              cityOffers={cityOffers}
              history={history}
              logged={false}
              match={match}
              offer={offer}
              onLoad={noop}
              onSendForm={noop}
              reviews={reviews}
              unloadActiveOffer={noop}
              userData={null}
            />
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
