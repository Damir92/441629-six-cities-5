import React from 'react';
import {shallow} from 'enzyme';

import {cityOffers, offer, noop, reviews} from '../../mocks/tests-data';
import {AuthorizationStatus} from '../../const';

import {OfferPage} from './offer-page';

const history = {
  push: noop,
};

const match = {
  params: {
    id: 0,
  },
};

describe(`Offer page renders correctly`, () => {
  it(`It is not main page`, () => {
    const tree = shallow(
        <OfferPage
          cityOffers={cityOffers}
          history={history}
          logged={AuthorizationStatus.NO_AUTH}
          match={match}
          offer={offer}
          onLoad={noop}
          onSendForm={noop}
          reviews={reviews}
          unloadActiveOffer={noop}
          userData={null}
        />
    );

    expect(tree).toMatchSnapshot();
  });
});
