import React from 'react';
import {shallow} from 'enzyme';

import {AuthorizationStatus} from '../../const';

import {Header} from './header';

describe(`Header component`, () => {
  it(`Authorized header snapshot`, () => {
    const tree = shallow(
        <Header
          logged={AuthorizationStatus.AUTH}
          userData={{email: `test@test.js`}}
        />
    );

    expect(tree).toMatchSnapshot();
  });

  it(`Unauthorized header snapshot`, () => {
    const tree = shallow(
        <Header
          logged={AuthorizationStatus.NO_AUTH}
        />
    );

    expect(tree).toMatchSnapshot();
  });
});
