import React from 'react';
import {shallow} from 'enzyme';

import {history} from '../../mocks/tests-data';
import {AuthorizationStatus} from '../../const';

import {Header} from './header';

describe(`Header component`, () => {
  it(`Authorized header snapshot`, () => {
    const tree = shallow(
        <Header
          history={history}
          logged={AuthorizationStatus.AUTH}
          userData={{email: `test@test.js`}}
        />
    );

    expect(tree).toMatchSnapshot();
  });

  it(`Unauthorized header snapshot`, () => {
    const tree = shallow(
        <Header
          history={history}
          logged={AuthorizationStatus.NO_AUTH}
        />
    );

    expect(tree).toMatchSnapshot();
  });
});
