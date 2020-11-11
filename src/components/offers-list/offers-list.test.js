import React from 'react';
import {shallow} from 'enzyme';

import {PageTypes} from '../../const';
import {cityOffers} from '../../mocks/tests-data';

import OffersList from './offers-list';

describe(`OffersList component`, () => {
  it(`Snapshot for main page`, () => {
    const tree = shallow(
        <OffersList
          cityOffers={cityOffers}
          pageType={PageTypes.MAIN}
        />
    );

    expect(tree).toMatchSnapshot();
  });

  it(`Snapshot for offer page`, () => {
    const tree = shallow(
        <OffersList
          cityOffers={cityOffers}
          pageType={PageTypes.OFFER}
        />
    );

    expect(tree).toMatchSnapshot();
  });

  it(`Snapshot for favorites page`, () => {
    const tree = shallow(
        <OffersList
          cityOffers={cityOffers}
          pageType={PageTypes.FAVORITES}
        />
    );

    expect(tree).toMatchSnapshot();
  });
});
