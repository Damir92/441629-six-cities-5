import React from 'react';
import {shallow} from 'enzyme';

import {cityOffers, noop} from '../../mocks/tests-data';

import {FavoritesPage} from './favorites-page';

describe(`FavoritesPage component`, () => {
  it(`FavoritesPage snapshot`, () => {
    const tree = shallow(
        <FavoritesPage
          favoriteOffers={cityOffers}
          onLoad={noop}
          onCityClick={noop}
        />
    );

    expect(tree).toMatchSnapshot();
  });
});
