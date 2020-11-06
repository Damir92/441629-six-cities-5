import React from 'react';
import renderer from 'react-test-renderer';

import {noop} from '../../mocks/tests-data';
import {SortingTypes} from '../../const';

import {OffersSorting} from './offers-sorting';

describe(`OffersSorting rendered correctly`, () => {
  it(`Render offers sorting component`, () => {
    const tree = renderer
      .create(
          <OffersSorting
            toggle={false}
            onOptionClick={noop}
            onToggleClick={noop}
            sortingType={SortingTypes[0]}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
