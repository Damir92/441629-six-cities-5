import React from 'react';
import {shallow} from 'enzyme';

import {noop} from '../../mocks/tests-data';

import withSelectList from './with-select-list';

const MockComponent = () => <div />;
const MockComponentWrapped = withSelectList(MockComponent);

describe(`withSelectList HOC, test open select`, () => {
  it(`Select should be closed after initialization`, () => {
    const wrapper = shallow(<MockComponentWrapped
      onOptionClick={noop}
    />);

    expect(wrapper.props().openedList).toEqual(false);
  });

  it(`Select should be opened after click`, () => {
    const wrapper = shallow(<MockComponentWrapped
      onOptionClick={noop}
    />);

    wrapper.props().onOpenList();
    expect(wrapper.props().openedList).toEqual(true);
  });
});

describe(`withSelectList HOC, test choose option`, () => {
  it(`Select should be set value after chose`, () => {
    const handleOptionClick = jest.fn((value) => value);

    const wrapper = shallow(<MockComponentWrapped
      onOptionClick={handleOptionClick}
    />);

    wrapper.props().onOpenList();
    expect(wrapper.props().openedList).toEqual(true);

    wrapper.props().onOptionClick(`testValue`);
    expect(handleOptionClick).toHaveBeenCalledTimes(1);
    expect(handleOptionClick).toHaveBeenCalledWith(`testValue`);
    expect(wrapper.props().openedList).toEqual(false);
  });
});
