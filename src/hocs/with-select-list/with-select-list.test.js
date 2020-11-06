import React, {Fragment} from 'react';
import renderer from 'react-test-renderer';
import PropTypes from 'prop-types';

import withSelectList from './with-select-list';
import {noop} from '../../mocks/tests-data';

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

const MockComponentWrapped = withSelectList(MockComponent);

describe(`with-select-list hoc rendered correctly`, () => {
  it(`withSelectList rendered correctly`, () => {
    const tree = renderer.create((
      <MockComponentWrapped
        onOptionClick={noop}
      >
        <Fragment />
      </MockComponentWrapped>
    )).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
