import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import {LivingType, Routes} from '../../const';
import {OfferCardPropTypes} from '../../prop-types';
import {convertRatingToPercent} from '../../utils';

const OfferCard = ({offer = {}, onMouseEnterCard, isMainPage = true}) => {

  const {
    id,
    isFavorite,
    isPremium,
    preview,
    price,
    rating,
    title,
    type,
  } = offer;

  const handleMouseEnterCard = () => {
    onMouseEnterCard(offer);
  };

  const handleMouseLeaveCard = () => {
    onMouseEnterCard(null);
  };

  return (
    <article
      className={`place-card ${isMainPage ? `cities__place-card` : `near-places__card`}`}
      onMouseEnter={handleMouseEnterCard}
      onMouseLeave={handleMouseLeaveCard}
    >
      {
        isPremium
        &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      <div className={`place-card__image-wrapper ${isMainPage ? `cities__image-wrapper` : `near-places__image-wrapper`}`}>
        <a href="#">
          <img className="place-card__image" src={preview} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button button ${isFavorite ? `place-card__bookmark-button--active` : ``}`}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">
              {isFavorite ? `In bookmarks` : `To bookmarks`}
            </span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: convertRatingToPercent(rating)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">

          <Link
            to={`${Routes.OFFER_LINK}/${id}`}
          >
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{LivingType[type]}</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = {
  offer: PropTypes.shape(OfferCardPropTypes).isRequired,
  onMouseEnterCard: PropTypes.func.isRequired,
  isMainPage: PropTypes.bool.isRequired,
};

export default OfferCard;
