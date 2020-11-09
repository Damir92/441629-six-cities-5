import React from 'react';
import {shallow} from 'enzyme';

import {AuthorizationStatus, Routes} from '../../const';

import {Header} from './header';

describe(`Header logo`, () => {
  it(`Check logo navigation inner page`, () => {
    const wrapper = shallow(
        <Header
          logged={AuthorizationStatus.AUTH}
          userData={{email: `test@test.js`}}
        />
    );

    const mainLogoLink = wrapper.find(`.header__logo-link`);

    expect(mainLogoLink.props().to).toBe(Routes.MAIN);
  });
});

describe(`Header profileLink`, () => {
  it(`Check navigation for unauthorized user`, () => {
    const wrapper = shallow(
        <Header
          logged={AuthorizationStatus.NO_AUTH}
        />
    );

    const profileLink = wrapper.find(`.header__nav-link`);

    expect(profileLink.props().to).toBe(Routes.LOGIN);
  });

  it(`Check navigation for authorized user`, () => {
    const wrapper = shallow(
        <Header
          logged={AuthorizationStatus.AUTH}
          userData={{email: `test@test.js`}}
        />
    );

    const profileLink = wrapper.find(`.header__nav-link`);

    expect(profileLink.props().to).toBe(Routes.FAVORITES);
  });
});
