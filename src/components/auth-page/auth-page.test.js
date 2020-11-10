import React from 'react';
import {shallow} from 'enzyme';

import {noop} from '../../mocks/tests-data';
import {AuthorizationStatus, Cities} from '../../const';

import {AuthPage} from './auth-page';

const history = {
  push: noop,
};

describe(`AuthPage component`, () => {
  it(`AuthPage snapshot`, () => {
    const tree = shallow(
        <AuthPage
          city={Cities[0]}
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
