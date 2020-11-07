import React from 'react';
import {shallow} from 'enzyme';

import {history} from '../../mocks/tests-data';
import {AuthorizationStatus} from '../../const';

import {Header} from './header';

describe(`Header renders correctly`, () => {
  it(`Render for main page`, () => {
    const tree = shallow(
        <Header
          history={history}
          isMainPage={true}
          logged={AuthorizationStatus.AUTH}
          userData={{email: `test@test.js`}}
        />
    );

    expect(tree).toMatchSnapshot();
  });

  it(`Render for other pages`, () => {
    const tree = shallow(
        <Header
          history={history}
          logged={AuthorizationStatus.NO_AUTH}
        />
    );

    expect(tree).toMatchSnapshot();
  });
});
