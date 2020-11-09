import React from 'react';
import {shallow} from 'enzyme';

import {cityOffers, noop} from '../../mocks/tests-data';
import {Cities, AuthorizationStatus} from '../../const';

import {MainPage} from './main-page';

describe(`MainPage component`, () => {
  it(`MainPage renders correctly`, () => {
    const component = shallow(
        <MainPage
          city={Cities[0]}
          cityOffers={cityOffers}
          logged={AuthorizationStatus.NO_AUTH}
          userData={null}
          onCityClick={noop}
          onOptionClick={noop}
        />
    );

    expect(component).toMatchSnapshot();
  });
});
