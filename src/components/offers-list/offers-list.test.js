import React from 'react';
import {shallow} from 'enzyme';

import {cityOffers} from '../../mocks/tests-data';

import OffersList from './offers-list';

jest.mock(`react-router-dom`, () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

describe(`Offers list renders correctly`, () => {
  it(`It is from main page`, () => {
    const tree = shallow(
        <OffersList
          cityOffers={cityOffers}
          isMainPage={true}
        />
    );

    expect(tree).toMatchSnapshot();
  });

  it(`It is not from main page`, () => {
    const tree = shallow(
        <OffersList
          cityOffers={cityOffers}
          isMainPage={false}
        />
    );

    expect(tree).toMatchSnapshot();
  });
});
