import React from 'react';
import {shallow} from 'enzyme';

import {noop} from '../../mocks/tests-data';

import {ReviewForm} from './review-form';

describe(`ReviewForm component`, () => {
  it(`Check rating selection`, () => {
    const handleClick = jest.fn((value) => value);

    const wrapper = shallow(
        <ReviewForm
          rating={``}
          review={``}
          onChange={handleClick}
          onSubmit={noop}
        />
    );

    const secondStarRating = wrapper.find(`.form__rating-input`).at(1);
    secondStarRating.simulate(`change`);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it(`Check rating`, () => {
    const wrapper = shallow(
        <ReviewForm
          rating={`3`}
          review={``}
          onChange={noop}
          onSubmit={noop}
        />
    );

    const thirdStarRating = wrapper.find(`.form__rating-input`).at(2);

    expect(thirdStarRating.props().checked).toBe(true);
  });

  it(`Button state: disabled (review data is absent)`, () => {
    const wrapper = shallow(
        <ReviewForm
          rating={``}
          review={``}
          onChange={noop}
          onSubmit={noop}
        />
    );

    const submitBtn = wrapper.find(`.reviews__submit`);

    expect(submitBtn.props().disabled).toBe(true);
  });

  it(`Button state: disabled (offer has rating data)`, () => {
    const wrapper = shallow(
        <ReviewForm
          rating={`1`}
          review={`Here is _20 simbols!Here is _20 simbols!Here is _20 simbols!`}
          onChange={noop}
          onSubmit={noop}
        />
    );

    const submitBtn = wrapper.find(`.reviews__submit`);

    expect(submitBtn.props().disabled).toBe(false);
  });

  it(`Check submit form`, () => {
    const handleSubmit = jest.fn((value) => value);
    const mockEvent = {preventDefault: noop};

    const wrapper = shallow(
        <ReviewForm
          rating={`2`}
          review={`Here is _20 simbols!Here is _20 simbols!Here is _20 simbols!`}
          onChange={noop}
          onSubmit={handleSubmit}
        />
    );

    const form = wrapper.find(`form.reviews__form`);
    form.simulate(`submit`, mockEvent);

    expect(handleSubmit).toHaveBeenCalledTimes(1);
    expect(handleSubmit).toHaveBeenCalledWith(mockEvent);
  });
});
