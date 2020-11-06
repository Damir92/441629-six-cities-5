import React, {Fragment} from 'react';
import {shallow} from 'enzyme';
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

describe(`with-select-list hoc renders correctly`, () => {
  it(`withSelectList renders correctly`, () => {
    const component = shallow(
        <MockComponentWrapped
          onOptionClick={noop}
        >
          <Fragment />
        </MockComponentWrapped>
    );

    expect(component).toMatchSnapshot();
  });
});
