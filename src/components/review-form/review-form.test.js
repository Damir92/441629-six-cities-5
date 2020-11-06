import React from 'react';
import renderer from 'react-test-renderer';

import {noop} from '../../mocks/tests-data';

import {ReviewForm} from './review-form';

describe(`ReviewForm rendered correctly`, () => {
  it(`Render review form component`, () => {
    const tree = renderer
      .create(
          <ReviewForm
            rating={``}
            review={``}
            onChange={noop}
            onSubmit={noop}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
