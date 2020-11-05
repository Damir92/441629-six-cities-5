import React from 'react';
import renderer from 'react-test-renderer';

import {cityOffers} from '../../mocks/tests-data';
import {Cities, AuthorizationStatus} from '../../const';

import {MainPage} from './main-page';

const noop = () => {};

const history = {
  push: noop,
};

it(`MainPage rendered correctly`, () => {
  const tree = renderer
    .create(<MainPage
      city={Cities[0]}
      cityOffers={cityOffers}
      history={history}
      logged={AuthorizationStatus.NO_AUTH}
      userData={null}
      onCityClick={noop}
      onOptionClick={noop}
    />, {
      createNodeMock: () => ({})
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
