import React from 'react';
import PropTypes from 'prop-types';

import {offerPropTypes} from '../../prop-types';

import OfferCard from '../offer-card/offer-card';

const OffersList = ({cityOffers = [], history, isMainPage = true}) => {
  return (
    <div className={`places__list ${isMainPage ? `cities__places-list tabs__content` : `near-places__list`}`}>
      {cityOffers.map((offer) => (
        <OfferCard
          history={history}
          key={offer.id}
          isMainPage={isMainPage}
          offer={offer}
        />
      ))}
    </div>
  );
};

OffersList.propTypes = {
  cityOffers: PropTypes.arrayOf(
      PropTypes.shape(offerPropTypes).isRequired
  ).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  isMainPage: PropTypes.bool,
};

export default OffersList;
