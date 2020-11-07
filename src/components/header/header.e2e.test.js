import React from 'react';
import {shallow} from 'enzyme';

import {AuthorizationStatus, Routes} from '../../const';

import {Header} from './header';

describe(`Header: test mainLogo click`, () => {
  it(`Test click from inner page`, () => {
    const handleClick = jest.fn((value) => value);
    const linkSendPrevention = jest.fn();
    const history = {
      push: handleClick,
    };

    const wrapper = shallow(
        <Header
          history={history}
          logged={AuthorizationStatus.AUTH}
          userData={{email: `test@test.js`}}
        />
    );

    const mainLogoLink = wrapper.find(`.header__logo-link`);
    mainLogoLink.simulate(`click`, {
      preventDefault: linkSendPrevention,
    });

    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(linkSendPrevention).toHaveBeenCalledTimes(1);
    expect(handleClick.mock.calls[0][0]).toBe(Routes.MAIN);
  });

  it(`Test click from main page`, () => {
    const handleClick = jest.fn((value) => value);
    const linkSendPrevention = jest.fn();
    const history = {
      push: handleClick,
    };

    const wrapper = shallow(
        <Header
          history={history}
          isMainPage={true}
          logged={AuthorizationStatus.AUTH}
          userData={{email: `test@test.js`}}
        />
    );

    const mainLogoLink = wrapper.find(`.header__logo-link`);
    mainLogoLink.simulate(`click`, {
      preventDefault: linkSendPrevention,
    });

    expect(handleClick).toHaveBeenCalledTimes(0);
    expect(linkSendPrevention).toHaveBeenCalledTimes(1);
    expect(handleClick.mock.calls[0]).toBeUndefined();
  });
});

describe(`Header: test click to profileLink`, () => {
  it(`Test click for unauthorized`, () => {
    const handleClick = jest.fn((value) => value);
    const linkSendPrevention = jest.fn();
    const history = {
      push: handleClick,
    };

    const wrapper = shallow(
        <Header
          history={history}
          logged={AuthorizationStatus.NO_AUTH}
        />
    );

    const profileLink = wrapper.find(`.header__nav-link`);
    profileLink.simulate(`click`, {
      preventDefault: linkSendPrevention,
    });

    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(linkSendPrevention).toHaveBeenCalledTimes(1);
    expect(handleClick.mock.calls[0][0]).toBe(Routes.LOGIN);
  });

  it(`Test click for authorized`, () => {
    const handleClick = jest.fn((value) => value);
    const linkSendPrevention = jest.fn();
    const history = {
      push: handleClick,
    };

    const wrapper = shallow(
        <Header
          history={history}
          logged={AuthorizationStatus.AUTH}
          userData={{email: `test@test.js`}}
        />
    );

    const profileLink = wrapper.find(`.header__nav-link`);
    profileLink.simulate(`click`, {
      preventDefault: linkSendPrevention,
    });

    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(linkSendPrevention).toHaveBeenCalledTimes(1);
    expect(handleClick.mock.calls[0][0]).toBe(Routes.FAVORITES);
  });
});
