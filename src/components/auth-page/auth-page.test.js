import React from 'react';
import {shallow} from 'enzyme';

import {noop} from '../../mocks/tests-data';

import {AuthPage} from './auth-page';

const history = {
  push: noop,
};

describe(`AuthPage renders correctly`, () => {
  it(`AuthPage renders correctly`, () => {
    const tree = shallow(
        <AuthPage
          history={history}
          email={``}
          password={``}
          onChange={noop}
          onSubmit={noop}
        />
    );

    expect(tree).toMatchSnapshot();
  });
});
