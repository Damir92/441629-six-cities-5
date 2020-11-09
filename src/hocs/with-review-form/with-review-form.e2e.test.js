import React from 'react';
import {shallow} from 'enzyme';

import {noop} from '../../mocks/tests-data';

import withReviewForm from './with-review-form';

const ID = 10;

const MockComponent = () => <div />;
const MockComponentWrapped = withReviewForm(MockComponent);

describe(`withAuthForm HOC`, () => {
  it(`Inputs should be empty`, () => {
    const wrapper = shallow(<MockComponentWrapped
      id={ID}
      onSubmit={noop}
    />);

    expect(wrapper.props().rating).toEqual(``);
    expect(wrapper.props().review).toEqual(``);
  });

  it(`Inputs should be with initial values`, () => {
    const wrapper = shallow(<MockComponentWrapped
      id={ID}
      onSubmit={noop}
      rating={`test_rating`}
      review={`test_review`}
    />);

    expect(wrapper.props().rating).toEqual(`test_rating`);
    expect(wrapper.props().review).toEqual(`test_review`);
  });
});

describe(`withAuthForm HOC, test change inputs`, () => {
  it(`Rating input should be changed`, () => {
    const wrapper = shallow(<MockComponentWrapped
      id={ID}
      onSubmit={noop}
    />);

    wrapper.props().onChange({
      persist: () => {},
      target: {
        name: `rating`,
        value: `3`,
      },
    });
    expect(wrapper.props().rating).toEqual(`3`);
  });

  it(`Review input should be changed`, () => {
    const wrapper = shallow(<MockComponentWrapped
      id={ID}
      onSubmit={noop}
    />);

    wrapper.props().onChange({
      persist: () => {},
      target: {
        name: `review`,
        value: `Test`,
      },
    });
    expect(wrapper.props().review).toEqual(`Test`);
  });
});

describe(`withAuthForm HOC, test submit`, () => {
  it(`Submit form with empty inputs`, () => {
    const handleSubmit = jest.fn((value) => value);

    const wrapper = shallow(<MockComponentWrapped
      id={ID}
      onSubmit={handleSubmit}
    />);

    wrapper.props().onSubmit({preventDefault: noop});

    expect(handleSubmit).toHaveBeenCalledTimes(1);
    expect(handleSubmit).toHaveBeenCalledWith({
      id: ID,
      comment: ``,
      rating: ``,
    });
  });

  it(`Submit form with changed inputs`, () => {
    const handleSubmit = jest.fn((value) => value);

    const wrapper = shallow(<MockComponentWrapped
      id={ID}
      onSubmit={handleSubmit}
      rating={`3`}
      review={`Test review`}
    />);

    wrapper.props().onSubmit({preventDefault: noop});

    expect(handleSubmit).toHaveBeenCalledTimes(1);
    expect(handleSubmit).toHaveBeenCalledWith({
      id: ID,
      comment: `Test review`,
      rating: `3`,
    });
  });

  it(`After submit form should be empty`, () => {
    const wrapper = shallow(<MockComponentWrapped
      id={ID}
      onSubmit={noop}
      rating={`3`}
      review={`Test review`}
    />);

    wrapper.props().onSubmit({
      preventDefault: noop,
    });

    expect(wrapper.props().rating).toEqual(``);
    expect(wrapper.props().review).toEqual(``);
  });
});
