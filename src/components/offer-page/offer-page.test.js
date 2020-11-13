import React from 'react';
import {shallow} from 'enzyme';

import {cityOffers, offer, noop, reviews, history} from '../../mocks/tests-data';
import {AuthorizationStatus} from '../../const';

import {OfferPage} from './offer-page';

const match = {
  params: {
    id: 0,
  },
};

describe(`Offer page renders correctly`, () => {
  it(`It is not main page`, () => {
    const tree = shallow(
        <OfferPage
          nearbyOffers={cityOffers}
          logged={AuthorizationStatus.NO_AUTH}
          history={history}
          match={match}
          offer={offer}
          onFavoriteClick={noop}
          onLoad={noop}
          onSendForm={noop}
          reviews={reviews}
          unsetActiveOffer={noop}
        />
    );

    expect(tree).toMatchSnapshot();
  });
});
