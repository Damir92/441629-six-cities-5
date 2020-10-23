import React, {useState} from 'react';
import PropTypes from 'prop-types';

import {offerPropTypes} from '../../prop-types';

import OfferCard from '../offer-card/offer-card';

const OffersList = ({offers = [], isMainPage = true}) => {
  // eslint-disable-next-line
  const [activeCard, setActiveCard] = useState(null);

  const handleMouseEnterCard = (item) => {
    setActiveCard(() => item);
  };

  return (
    <div className={`places__list ${isMainPage ? `cities__places-list tabs__content` : `near-places__list`}`}>
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          isMainPage={isMainPage}
          offer={offer}
          onMouseEnterCard={handleMouseEnterCard}
        />
      ))}
    </div>
  );
};

OffersList.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape(offerPropTypes).isRequired
  ).isRequired,
  isMainPage: PropTypes.bool,
};

export default OffersList;
