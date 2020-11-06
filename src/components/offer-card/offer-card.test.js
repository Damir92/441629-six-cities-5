import React from 'react';
import renderer from 'react-test-renderer';

import {offer, noop} from '../../mocks/tests-data';

import {OfferCard} from './offer-card';

jest.mock(`react-router-dom`, () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

describe(`OfferCard rendered correctly`, () => {
  it(`It is main page`, () => {
    const tree = renderer
      .create(
          <OfferCard
            isMainPage={true}
            offer={offer}
            onCardEnterMouse={noop}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`It is NOT main page`, () => {
    const tree = renderer
      .create(
          <OfferCard
            isMainPage={false}
            offer={offer}
            onCardEnterMouse={noop}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

