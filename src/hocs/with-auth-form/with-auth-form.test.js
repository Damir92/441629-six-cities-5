import React, {Fragment} from 'react';
import renderer from 'react-test-renderer';
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

describe(`with-auth-form hoc rendered correctly`, () => {
  it(`withAuthForm without props rendered correctly`, () => {
    const tree = renderer.create((
      <MockComponentWrapped>
        <Fragment />
      </MockComponentWrapped>
    )).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`withAuthForm with props rendered correctly`, () => {
    const tree = renderer.create((
      <MockComponentWrapped
        email={`test@test.js`}
        password={`123`}
      >
        <Fragment />
      </MockComponentWrapped>
    )).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
