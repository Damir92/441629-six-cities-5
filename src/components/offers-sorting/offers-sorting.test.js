import React from 'react';
import {shallow} from 'enzyme';

import {noop} from '../../mocks/tests-data';
import {SortingTypes} from '../../const';

import {OffersSorting} from './offers-sorting';

describe(`OffersSorting renders correctly`, () => {
  it(`Render with toggle is false`, () => {
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

  it(`Render with toggle is true`, () => {
    const tree = shallow(
        <OffersSorting
          toggle={true}
          onOptionClick={noop}
          onToggleClick={noop}
          sortingType={SortingTypes[1]}
        />
    );

    expect(tree).toMatchSnapshot();
  });
});
