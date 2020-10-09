import React, {useState} from 'react';
import PropTypes from 'prop-types';

import {offerPropTypes} from '../../prop-types';

import OfferCard from '../offer-card/offer-card';

const OffersList = ({offers = []}) => {
  // eslint-disable-next-line
  const [activeCard, setActiveCard] = useState(null);

  const handleMouseEnterCard = (item) => {
    setActiveCard(() => item);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
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
};

export default OffersList;
