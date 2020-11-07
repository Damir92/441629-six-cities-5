import React from 'react';
import {shallow} from 'enzyme';

import {Cities} from '../../const';
import {noop} from '../../mocks/tests-data';

import CitiesList from './cities-list';

describe(`CitiesList component tests correctly`, () => {
  it(`Chosen city contains activeClass`, () => {
    const wrapper = shallow(
        <CitiesList
          city={Cities[0]}
          onCityClick={noop}
        />
    );

    const activeCityLink = wrapper.find(`.locations__item-link`).at(0);
    const notActiveCityLink = wrapper.find(`.locations__item-link`).at(1);

    expect(activeCityLink.hasClass(`tabs__item--active`)).toBe(true);
    expect(notActiveCityLink.hasClass(`tabs__item--active`)).toBe(false);
  });

  it(`Click city from list`, () => {
    const handleClick = jest.fn((value) => value);
    const formSendPrevention = jest.fn();

    const wrapper = shallow(
        <CitiesList
          city={Cities[0]}
          onCityClick={handleClick}
        />
    );

    const secondCityLink = wrapper.find(`.locations__item-link`).at(1);

    secondCityLink.simulate(`click`, {
      preventDefault: formSendPrevention,
    });

    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(formSendPrevention).toHaveBeenCalledTimes(1);
    expect(handleClick.mock.calls[0][0]).toBe(Cities[1]);
  });
});
