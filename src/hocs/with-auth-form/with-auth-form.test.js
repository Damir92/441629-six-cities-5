import React, {Fragment} from 'react';
import {shallow} from 'enzyme';
import PropTypes from 'prop-types';

import withAuthForm from './with-auth-form';

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

const MockComponentWrapped = withAuthForm(MockComponent);

describe(`with-auth-form HOC`, () => {
  it(`withAuthForm without props renders correctly`, () => {
    const component = shallow(
        <MockComponentWrapped>
          <Fragment />
        </MockComponentWrapped>
    );

    expect(component).toMatchSnapshot();
  });

  it(`withAuthForm with props renders correctly`, () => {
    const component = shallow(
        <MockComponentWrapped
          email={`test@test.js`}
          password={`123`}
        >
          <Fragment />
        </MockComponentWrapped>
    );

    expect(component).toMatchSnapshot();
  });
});
