import React from 'react';
import {shallow} from 'enzyme';

import {Routes} from '../../const';
import {noop, offer} from '../../mocks/tests-data';

import {OfferCard} from './offer-card';

describe(`OfferCard component`, () => {
  it(`Check navigation on page`, () => {
    const wrapper = shallow(
        <OfferCard
          isMainPage={true}
          offer={offer}
          onCardEnterMouse={noop}
        />
    );

    const title = wrapper.find(`.place-card__name Link`);
    title.simulate(`click`);
    const image = wrapper.find(`.place-card__image-wrapper Link`);
    image.simulate(`click`);

    expect(title.props().to).toBe(`${Routes.OFFER_LINK}/${offer.id}`);
    expect(image.props().to).toBe(`${Routes.OFFER_LINK}/${offer.id}`);
  });

  it(`Check action after mouse enters to card`, () => {
    const handleEnterMouse = jest.fn((value) => value);
    const offerID = +offer.id;

    const wrapper = shallow(
        <OfferCard
          isMainPage={true}
          offer={offer}
          onCardEnterMouse={handleEnterMouse}
        />
    );

    const card = wrapper.find(`article.place-card`);

    card.simulate(`mouseenter`);

    expect(handleEnterMouse).toHaveBeenCalledTimes(1);
    expect(handleEnterMouse).toHaveBeenLastCalledWith(offerID);
  });
});
