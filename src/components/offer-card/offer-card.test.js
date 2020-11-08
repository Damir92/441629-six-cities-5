import React from 'react';
import {shallow} from 'enzyme';

import {offer, noop} from '../../mocks/tests-data';

import {OfferCard} from './offer-card';

describe(`OfferCard component`, () => {
  it(`OfferCard inner page snapshot`, () => {
    const tree = shallow(
        <OfferCard
          isMainPage={true}
          offer={offer}
          onCardEnterMouse={noop}
        />
    );

    expect(tree).toMatchSnapshot();
  });

  it(`OfferCard main page snapshot`, () => {
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

