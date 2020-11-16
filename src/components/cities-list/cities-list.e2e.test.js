import React from 'react';
import {mount} from 'enzyme';

import {Cities} from '../../const';
import {noop} from '../../mocks/tests-data';

import CitiesList from './cities-list';

describe(`CitiesList component tests correctly`, () => {
  it(`Active city is highlighted`, () => {
    const ID = 2;

    const wrapper = mount(
        <CitiesList
          city={Cities[ID]}
          onCityClick={noop}
        />
    );

    const activeCityLink = wrapper.find(`.locations__item-link.tabs__item--active`);
    const notActiveCityLink = wrapper.find(`.locations__item-link`).at(0);

    expect(activeCityLink.text()).toBe(Cities[ID]);
    expect(notActiveCityLink.hasClass(`tabs__item--active`)).toBe(false);
  });

  it(`Click city from list`, () => {
    const ID1 = 1;
    const ID2 = 2;
    const handleClick = jest.fn((value) => value);

    const wrapper = mount(
        <CitiesList
          city={Cities[0]}
          onCityClick={handleClick}
        />
    );

    const links = wrapper.find(`.locations__item-link`);
    const firstCityLink = links.at(ID1);
    const secondCityLink = links.at(ID2);

    firstCityLink.simulate(`click`, {preventDefault: noop});

    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(handleClick).toHaveBeenCalledWith(Cities[ID1]);

    secondCityLink.simulate(`click`, {preventDefault: noop});

    expect(handleClick).toHaveBeenCalledTimes(2);
    expect(handleClick).toHaveBeenCalledWith(Cities[ID2]);
  });
});
