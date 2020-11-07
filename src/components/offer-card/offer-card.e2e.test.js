import React from 'react';
import {shallow} from 'enzyme';

import {Routes} from '../../const';
import {noop, offer} from '../../mocks/tests-data';

import {OfferCard} from './offer-card';

describe(`OfferCard tests correctly`, () => {
  it(`Test click to card's title`, () => {
    const handleClick = jest.fn((value) => value);
    const linkSendPrevention = jest.fn();
    const history = {
      push: handleClick,
    };

    const wrapper = shallow(
        <OfferCard
          history={history}
          isMainPage={true}
          offer={offer}
          onCardEnterMouse={noop}
        />
    );

    const title = wrapper.find(`.place-card__name a`);
    title.simulate(`click`, {
      preventDefault: linkSendPrevention,
    });

    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(linkSendPrevention).toHaveBeenCalledTimes(1);
    expect(handleClick.mock.calls[0][0]).toBe(`${Routes.OFFER_LINK}/${offer.id}`);
  });

  it(`Test click to card's image`, () => {
    const handleClick = jest.fn((value) => value);
    const linkSendPrevention = jest.fn();
    const history = {
      push: handleClick,
    };

    const wrapper = shallow(
        <OfferCard
          history={history}
          isMainPage={true}
          offer={offer}
          onCardEnterMouse={noop}
        />
    );

    const title = wrapper.find(`.place-card__image-wrapper a`);
    title.simulate(`click`, {
      preventDefault: linkSendPrevention,
    });

    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(linkSendPrevention).toHaveBeenCalledTimes(1);
    expect(handleClick.mock.calls[0][0]).toBe(`${Routes.OFFER_LINK}/${offer.id}`);
  });

  it(`Test enterMouse to card`, () => {
    const handleEnterMouse = jest.fn((value) => value);
    const history = {
      push: noop,
    };
    const offerID = +offer.id;

    const wrapper = shallow(
        <OfferCard
          history={history}
          isMainPage={true}
          offer={offer}
          onCardEnterMouse={handleEnterMouse}
        />
    );

    const card = wrapper.find(`article.place-card`);

    card.simulate(`mouseenter`);

    expect(handleEnterMouse.mock.calls[0][0]).toBe(offerID);
    expect(handleEnterMouse).toHaveBeenCalledTimes(1);
  });
});
