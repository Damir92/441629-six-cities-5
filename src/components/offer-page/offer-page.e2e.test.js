import React from 'react';
import {shallow} from 'enzyme';

import {FavoriteStatus, AuthorizationStatus} from '../../const';
import {noop, offer, cityOffers, reviews, history} from '../../mocks/tests-data';

import {OfferPage} from './offer-page';

describe(`OfferPage component`, () => {
  it(`Check action after add/remove card to/from favorites`, () => {
    const OFFER_ID = 0;
    const handleClick = jest.fn((value) => value);
    const match = {
      params: {
        id: OFFER_ID,
      },
    };
    const mockAnswer = {
      id: OFFER_ID,
      status: offer.isFavorite ? FavoriteStatus.IS_NOT_FAVORITE : FavoriteStatus.IS_FAVORITE,
    };

    const wrapper = shallow(
        <OfferPage
          nearbyOffers={cityOffers}
          logged={AuthorizationStatus.AUTH}
          history={history}
          match={match}
          offer={offer}
          onFavoriteClick={handleClick}
          onLoad={noop}
          onSendForm={noop}
          reviews={reviews}
          unsetActiveOffer={noop}
        />
    );

    const button = wrapper.find(`.property__bookmark-button`);

    button.simulate(`click`);

    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(handleClick).toHaveBeenLastCalledWith(mockAnswer);
  });
});
