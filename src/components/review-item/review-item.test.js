import React from 'react';
import renderer from 'react-test-renderer';

import {reviews} from '../../mocks/tests-data';

import ReviewItem from './review-item';

describe(`ReviewItem rendered correctly`, () => {
  it(`Render review item component`, () => {
    const tree = renderer
      .create(
          <ReviewItem
            review={reviews[0]}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
