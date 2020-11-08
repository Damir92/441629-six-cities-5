import React from 'react';
import {shallow} from 'enzyme';

import withAuthForm from './with-auth-form';

const MockComponent = () => <div />;
const MockComponentWrapped = withAuthForm(MockComponent);

describe(`withAuthForm HOC`, () => {
  it(`Inputs should be empty after initialization`, () => {
    const wrapper = shallow(<MockComponentWrapped />);

    expect(wrapper.props().email).toEqual(``);
    expect(wrapper.props().password).toEqual(``);
  });

  it(`Email input should be changed`, () => {
    const wrapper = shallow(<MockComponentWrapped />);

    wrapper.props().onChange({
      persist: () => {},
      target: {
        name: `email`,
        value: `test@test.js`,
      },
    });
    expect(wrapper.props().email).toEqual(`test@test.js`);
  });

  it(`Password input should be changed`, () => {
    const wrapper = shallow(<MockComponentWrapped />);

    wrapper.props().onChange({
      persist: () => {},
      target: {
        name: `password`,
        value: `1234`,
      },
    });
    expect(wrapper.props().password).toEqual(`1234`);
  });
});
