import React from 'react';
import {shallow} from 'enzyme';

import {noop} from '../../mocks/tests-data';
import {SortingTypes} from '../../const';

import {OffersSorting} from './offers-sorting';

describe(`OffersSorting renders correctly`, () => {
  it(`OffersSorting renders correctly`, () => {
    const tree = shallow(
        <OffersSorting
          toggle={false}
          onOptionClick={noop}
          onToggleClick={noop}
          sortingType={SortingTypes[0]}
        />
    );

    expect(tree).toMatchSnapshot();
  });
});
