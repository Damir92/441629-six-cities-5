import React, {Fragment} from 'react';
import {shallow} from 'enzyme';
import PropTypes from 'prop-types';

import {noop} from '../../mocks/tests-data';

import withReviewForm from './with-review-form';

const MockComponent = (props) => {
  const {children} = props;

  return (
    <Fragment>
      {children}
    </Fragment>
  );
};

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

const MockComponentWrapped = withReviewForm(MockComponent);

describe(`with-review-form hoc renders correctly`, () => {
  it(`withReviewForm without additional props renders correctly`, () => {
    const component = shallow(
        <MockComponentWrapped
          id={0}
          onSubmit={noop}
        >
          <Fragment />
        </MockComponentWrapped>
    );

    expect(component).toMatchSnapshot();
  });

  it(`withReviewForm with all props renders correctly`, () => {
    const component = shallow(
        <MockComponentWrapped
          id={0}
          onSubmit={noop}
          rating={3}
          review={`test`}
        >
          <Fragment />
        </MockComponentWrapped>
    );

    expect(component).toMatchSnapshot();
  });
});
