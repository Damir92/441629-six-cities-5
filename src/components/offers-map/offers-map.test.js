import React from 'react';
import renderer from 'react-test-renderer';

import {cityOffers} from '../../mocks/tests-data';

import {OffersMap} from './offers-map';

describe(`OffersMap rendered correctly`, () => {
  it(`Render offers map component`, () => {
    const tree = renderer
      .create(
          <OffersMap
            cityOffers={cityOffers}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });


});
