import React from 'react';
import {shallow} from 'enzyme';

import {reviews} from '../../mocks/tests-data';

import ReviewsList from './reviews-list';

describe(`ReviewsList renders correctly`, () => {
  it(`ReviewList component renders`, () => {
    const component = shallow(
        <ReviewsList
          reviews={reviews}
        />
    );

    expect(component).toMatchSnapshot();
  });
});
