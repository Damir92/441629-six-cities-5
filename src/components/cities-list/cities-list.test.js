import React from 'react';
import renderer from 'react-test-renderer';

import {noop} from '../../mocks/tests-data';
import {Cities} from '../../const';

import CitiesList from './cities-list';

describe(`CitiesList rendered correctly`, () => {
  it(`Render cities list component`, () => {
    const tree = renderer
      .create(
          <CitiesList
            city={Cities[0]}
            onCityClick={noop}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
