import React from 'react';
import {shallow} from 'enzyme';

import {cityOffers, noop} from '../../mocks/tests-data';
import {Cities} from '../../const';

import {MainPage} from './main-page';

describe(`MainPage component`, () => {
  it(`MainPage renders correctly`, () => {
    const component = shallow(
        <MainPage
          city={Cities[0]}
          cityOffers={cityOffers}
          onCityClick={noop}
          onOptionClick={noop}
        />
    );

    expect(component).toMatchSnapshot();
  });
});
