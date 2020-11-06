import React, {Fragment} from 'react';
import renderer from 'react-test-renderer';
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

describe(`with-review-form hoc rendered correctly`, () => {
  it(`withReviewForm without additional props rendered correctly`, () => {
    const tree = renderer.create((
      <MockComponentWrapped
        id={0}
        onSubmit={noop}
      >
        <Fragment />
      </MockComponentWrapped>
    )).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`withReviewForm with all props rendered correctly`, () => {
    const tree = renderer.create((
      <MockComponentWrapped
        id={0}
        onSubmit={noop}
        rating={3}
        review={'test'}
      >
        <Fragment />
      </MockComponentWrapped>
    )).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
