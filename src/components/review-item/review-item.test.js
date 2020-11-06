import React from 'react';
import {shallow} from 'enzyme';

import {reviews} from '../../mocks/tests-data';

import ReviewItem from './review-item';

describe(`ReviewItem renders correctly`, () => {
  it(`ReviewItem renders correctly`, () => {
    const tree = shallow(
        <ReviewItem
          review={reviews[0]}
        />
    );

    expect(tree).toMatchSnapshot();
  });
});
