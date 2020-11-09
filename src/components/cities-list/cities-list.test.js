import React from 'react';
import {shallow} from 'enzyme';

import {noop} from '../../mocks/tests-data';
import {Cities} from '../../const';

import CitiesList from './cities-list';

describe(`CitiesList component`, () => {
  it(`CitiesList snapshot`, () => {
    const tree = shallow(
        <CitiesList
          city={Cities[0]}
          onCityClick={noop}
        />
    );

    expect(tree).toMatchSnapshot();
  });
});
