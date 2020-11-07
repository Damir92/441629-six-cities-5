import React from 'react';
import {shallow} from 'enzyme';

import {history, offer, noop} from '../../mocks/tests-data';

import {OfferCard} from './offer-card';

describe(`OfferCard renders correctly`, () => {
  it(`It is from main page`, () => {
    const tree = shallow(
        <OfferCard
          isMainPage={true}
          history={history}
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
          history={history}
          offer={offer}
          onCardEnterMouse={noop}
        />
    );

    expect(tree).toMatchSnapshot();
  });
});

