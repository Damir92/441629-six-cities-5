import React from 'react';
import {shallow} from 'enzyme';

import withToggle from './with-toggle';

const MockComponent = () => <div />;
const MockComponentWrapped = withToggle(MockComponent);

describe(`withToggle HOC, test toggle`, () => {
  it(`Toggle should be have initial state`, () => {
    const wrapper = shallow(<MockComponentWrapped
      toggleState={true}
    />);

    expect(wrapper.props().toggle).toEqual(true);
  });

  it(`Toggle changes after click`, () => {
    const wrapper = shallow(<MockComponentWrapped />);

    expect(wrapper.props().toggle).toEqual(false);

    wrapper.props().onToggleClick();

    expect(wrapper.props().toggle).toEqual(true);
  });
});
