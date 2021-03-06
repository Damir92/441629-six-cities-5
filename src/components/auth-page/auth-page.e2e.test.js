import React from 'react';
import {shallow} from 'enzyme';

import {noop} from '../../mocks/tests-data';
import {Cities} from '../../const';

import {AuthPage} from './auth-page';

describe(`AuthPage component`, () => {
  it(`Auth form submits correctly`, () => {
    const handleSubmitAction = jest.fn((value) => value);
    const testData = {
      email: `test@test.js`,
      password: `1234`,
    };

    const wrapper = shallow(
        <AuthPage
          city={Cities[0]}
          email={testData.email}
          password={testData.password}
          onChange={noop}
          onSubmit={handleSubmitAction}
        />
    );

    const form = wrapper.find(`.login__form`);

    form.simulate(`submit`, {preventDefault: noop});
    expect(handleSubmitAction).toHaveBeenCalledTimes(1);
    expect(handleSubmitAction).toHaveBeenCalledWith(testData);
  });
});
