import React from 'react';
import {shallow} from 'enzyme';

import {cityOffers, noop} from '../../mocks/tests-data';

import {FavoritesPage} from './favorites-page';

describe(`FavoritesPage component`, () => {
  it(`Check change city after click to link`, () => {
    const handleCityClick = jest.fn((value) => value);
    const city = cityOffers[0].city.name;

    const wrapper = shallow(
        <FavoritesPage
          favoriteOffers={cityOffers}
          onLoad={noop}
          onCityClick={handleCityClick}
        />
    );

    const link = wrapper.find(`.locations__item-link`);
    link.simulate(`click`);

    expect(handleCityClick).toHaveBeenCalledWith(city);
  });
});
