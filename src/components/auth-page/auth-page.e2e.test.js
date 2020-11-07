import React from 'react';
import {shallow} from 'enzyme';

import {history, noop} from '../../mocks/tests-data';

import {AuthPage} from './auth-page';

describe(`AuthPage component tests correctly`, () => {
  it(`Change both inputs`, () => {
    const handleChangeInput = jest.fn();

    const wrapper = shallow(
        <AuthPage
          history={history}
          email={``}
          password={``}
          onChange={handleChangeInput}
          onSubmit={noop}
        />
    );

    const inputEmail = wrapper.find(`.login__input`).at(0);
    const inputPassword = wrapper.find(`.login__input`).at(1);

    inputEmail.simulate(`change`, {target: {value: `test@test.js`}});
    expect(handleChangeInput).toHaveBeenCalledTimes(1);

    inputPassword.simulate(`change`, {target: {value: `1234`}});
    expect(handleChangeInput).toHaveBeenCalledTimes(2);
  });

  it(`Try send form`, () => {
    const handleSubmitAction = jest.fn();
    const formSendPrevention = jest.fn();

    const wrapper = shallow(
        <AuthPage
          history={history}
          email={`test@test.js`}
          password={`1234`}
          onChange={noop}
          onSubmit={handleSubmitAction}
        />
    );

    const form = wrapper.find(`.login__form`);

    form.simulate(`submit`, {
      preventDefault: formSendPrevention,
    });
    expect(handleSubmitAction).toHaveBeenCalledTimes(1);
    expect(formSendPrevention).toHaveBeenCalledTimes(1);
  });
});
