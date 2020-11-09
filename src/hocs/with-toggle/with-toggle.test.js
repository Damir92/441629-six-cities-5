import React, {Fragment} from 'react';
import {shallow} from 'enzyme';
import PropTypes from 'prop-types';

import withToggle from './with-toggle';

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

const MockComponentWrapped = withToggle(MockComponent);

describe(`with-auth-form hoc renders correctly`, () => {
  it(`withToggle renders correctly`, () => {
    const component = shallow(
        <MockComponentWrapped
          toggleState={false}
        >
          <Fragment />
        </MockComponentWrapped>
    );

    expect(component).toMatchSnapshot();
  });
});
