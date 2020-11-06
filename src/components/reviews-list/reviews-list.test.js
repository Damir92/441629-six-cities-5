import React from 'react';
import renderer from 'react-test-renderer';

import {reviews} from '../../mocks/tests-data';

import ReviewsList from './reviews-list';

describe(`ReviewsList rendered correctly`, () => {
  it(`Render reviews list component`, () => {
    const tree = renderer
      .create(
          <ReviewsList
            reviews={reviews}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
