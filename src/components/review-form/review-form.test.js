import React from 'react';
import {shallow} from 'enzyme';

import {noop} from '../../mocks/tests-data';

import {ReviewForm} from './review-form';

describe(`ReviewForm component`, () => {
  it(`ReviewForm renders correctly`, () => {
    const tree = shallow(
        <ReviewForm
          rating={``}
          review={``}
          onChange={noop}
          onSubmit={noop}
        />
    );

    expect(tree).toMatchSnapshot();
  });
});
