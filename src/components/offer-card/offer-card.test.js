import React from 'react';
import {shallow} from 'enzyme';

import {offer, noop} from '../../mocks/tests-data';

import {OfferCard} from './offer-card';

jest.mock(`react-router-dom`, () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

describe(`OfferCard renders correctly`, () => {
  it(`It is from main page`, () => {
    const tree = shallow(
        <OfferCard
          isMainPage={true}
          offer={offer}
          onCardEnterMouse={noop}
        />
    );

    expect(tree).toMatchSnapshot();
  });

  it(`It is not from main page`, () => {
    const tree = shallow(
        <OfferCard
          isMainPage={false}
          offer={offer}
          onCardEnterMouse={noop}
        />
    );

    expect(tree).toMatchSnapshot();
  });
});

