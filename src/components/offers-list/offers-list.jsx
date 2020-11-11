import React from 'react';
import PropTypes from 'prop-types';

import {PageTypes} from '../../const';

import {offerPropTypes} from '../../prop-types';

import OfferCard from '../offer-card/offer-card';

const OffersList = ({cityOffers = [], pageType}) => {
  const getClassesByPageType = () => {
    switch (pageType) {
      case PageTypes.MAIN:
        return `places__list cities__places-list tabs__content`;
      case PageTypes.OFFER:
        return `places__list near-places__list`;
      case PageTypes.FAVORITES:
        return `favorites__places`;
    }

    return `places__list`;
  };

  return (
    <div className={getClassesByPageType()}>
      {cityOffers.map((offer) => (
        <OfferCard
          key={offer.id}
          pageType={pageType}
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
  pageType: PropTypes.oneOf([PageTypes.MAIN, PageTypes.OFFER, PageTypes.FAVORITES]).isRequired,
};

export default OffersList;
