import React from 'react';
import {shallow} from 'enzyme';

import {noop} from '../../mocks/tests-data';
import {AuthorizationStatus} from '../../const';

import {AuthPage} from './auth-page';

const history = {
  push: noop,
};

describe(`AuthPage component`, () => {
  it(`AuthPage renders correctly`, () => {
    const tree = shallow(
        <AuthPage
          history={history}
          email={``}
          password={``}
          logged={AuthorizationStatus.NO_AUTH}
          onChange={noop}
          onSubmit={noop}
          redirectToMain={noop}
        />
    );

    expect(tree).toMatchSnapshot();
  });
});
