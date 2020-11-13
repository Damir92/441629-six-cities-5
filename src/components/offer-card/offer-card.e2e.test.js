import React from 'react';
import {shallow} from 'enzyme';

import {Routes, PageTypes, FavoriteStatus, AuthorizationStatus} from '../../const';
import {noop, offer} from '../../mocks/tests-data';

import {OfferCard} from './offer-card';

jest.mock(`react-router-dom`, () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
  Link: `Link`,
}));

describe(`OfferCard component`, () => {
  it(`Check navigation on page`, () => {
    const wrapper = shallow(
        <OfferCard
          logged={AuthorizationStatus.AUTH}
          offer={offer}
          onCardEnterMouse={noop}
          onFavoriteClick={noop}
          pageType={PageTypes.MAIN}
        />
    );

    const title = wrapper.find(`.place-card__name Link`);
    const image = wrapper.find(`.place-card__image-wrapper Link`);

    expect(title.props().to).toBe(`${Routes.OFFER_LINK}/${offer.id}`);
    expect(image.props().to).toBe(`${Routes.OFFER_LINK}/${offer.id}`);
  });

  it(`Check action after mouse enters to card`, () => {
    const handleEnterMouse = jest.fn((value) => value);
    const offerID = +offer.id;

    const wrapper = shallow(
        <OfferCard
          logged={AuthorizationStatus.AUTH}
          offer={offer}
          onCardEnterMouse={handleEnterMouse}
          onFavoriteClick={noop}
          pageType={PageTypes.MAIN}
        />
    );

    const card = wrapper.find(`article.place-card`);

    card.simulate(`mouseenter`);

    expect(handleEnterMouse).toHaveBeenCalledTimes(1);
    expect(handleEnterMouse).toHaveBeenLastCalledWith(offerID);
  });

  it(`Check action after add/remove card to/from favorites`, () => {
    const handleClick = jest.fn((value) => value);
    const mockAnswer = {
      id: offer.id,
      status: offer.isFavorite ? FavoriteStatus.IS_NOT_FAVORITE : FavoriteStatus.IS_FAVORITE,
    };

    const wrapper = shallow(
        <OfferCard
          logged={AuthorizationStatus.AUTH}
          offer={offer}
          onCardEnterMouse={noop}
          onFavoriteClick={handleClick}
          pageType={PageTypes.MAIN}
        />
    );

    const button = wrapper.find(`.place-card__bookmark-button`);

    button.simulate(`click`);

    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(handleClick).toHaveBeenLastCalledWith(mockAnswer, PageTypes.MAIN);
  });
});
