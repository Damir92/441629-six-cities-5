import React from 'react';
import {shallow} from 'enzyme';

import {noop} from '../../mocks/tests-data';
import {Cities} from '../../const';

import {AuthPage} from './auth-page';

describe(`AuthPage component`, () => {
  it(`AuthPage snapshot`, () => {
    const tree = shallow(
        <AuthPage
          city={Cities[0]}
          email={``}
          password={``}
          onChange={noop}
          onSubmit={noop}
        />
    );

    expect(tree).toMatchSnapshot();
  });
});
