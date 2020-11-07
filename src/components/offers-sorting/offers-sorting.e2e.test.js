import React from 'react';
import {shallow} from 'enzyme';

import {noop} from '../../mocks/tests-data';
import {SortingTypes} from '../../const';

import {OffersSorting} from './offers-sorting';

describe(`OffersSorting tests correctly`, () => {
  it(`Click for open options`, () => {
    const handleToggle = jest.fn();

    const wrapper = shallow(
        <OffersSorting
          toggle={false}
          onOptionClick={noop}
          onToggleClick={handleToggle}
          sortingType={SortingTypes[0]}
        />
    );

    const toggleArea = wrapper.find(`span.places__sorting-type`);
    toggleArea.simulate(`click`);

    expect(handleToggle).toHaveBeenCalledTimes(1);
  });

  it(`Choose option`, () => {
    const handleToggle = jest.fn();
    const handleClick = jest.fn((value) => value);

    const wrapper = shallow(
        <OffersSorting
          toggle={true}
          onOptionClick={handleClick}
          onToggleClick={handleToggle}
          sortingType={SortingTypes[0]}
        />
    );

    const secondOption = wrapper.find(`li.places__option`).at(1);
    secondOption.simulate(`click`);

    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(handleToggle).toHaveBeenCalledTimes(1);
    expect(handleClick.mock.calls[0][0]).toBe(SortingTypes[1]);
  });

  it(`List opens with chose option`, () => {
    const wrapper = shallow(
        <OffersSorting
          toggle={true}
          onOptionClick={noop}
          onToggleClick={noop}
          sortingType={SortingTypes[1]}
        />
    );

    const options = wrapper.find(`li.places__option`);

    expect(options.at(1).hasClass(`places__option--active`)).toBe(true);
    expect(options.at(0).hasClass(`places__option--active`)).toBe(false);
  });
});
