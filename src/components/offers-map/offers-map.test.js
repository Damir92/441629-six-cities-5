import React from 'react';
import {shallow} from 'enzyme';

import {cityOffers} from '../../mocks/tests-data';

import {OffersMap} from './offers-map';

describe(`OffersMap renders correctly`, () => {
  it(`OffersMap renders correctly`, () => {
    const tree = shallow(
        <OffersMap
          cityOffers={cityOffers}
        />
    );

    expect(tree).toMatchSnapshot();
  });


});
