import React from 'react';
import {shallow} from 'enzyme';

import {PageTypes, AuthorizationStatus} from '../../const';
import {offer, noop} from '../../mocks/tests-data';

import {OfferCard} from './offer-card';

jest.mock(`react-router-dom`, () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
  Link: `Link`,
}));

describe(`OfferCard component`, () => {
  it(`OfferCard main page snapshot`, () => {
    const tree = shallow(
        <OfferCard
          logged={AuthorizationStatus.AUTH}
          offer={offer}
          onCardEnterMouse={noop}
          onFavoriteClick={noop}
          pageType={PageTypes.MAIN}
        />
    );

    expect(tree).toMatchSnapshot();
  });

  it(`OfferCard offer page snapshot`, () => {
    const tree = shallow(
        <OfferCard
          logged={AuthorizationStatus.AUTH}
          offer={offer}
          onCardEnterMouse={noop}
          onFavoriteClick={noop}
          pageType={PageTypes.OFFER}
        />
    );

    expect(tree).toMatchSnapshot();
  });

  it(`OfferCard favorites page snapshot`, () => {
    const tree = shallow(
        <OfferCard
          logged={AuthorizationStatus.AUTH}
          offer={offer}
          onCardEnterMouse={noop}
          onFavoriteClick={noop}
          pageType={PageTypes.FAVORITES}
        />
    );

    expect(tree).toMatchSnapshot();
  });
});

