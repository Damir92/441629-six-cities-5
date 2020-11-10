import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import {setActiveCard} from '../../store/action';
import {fetchFavorite, fetchNearbyOffers, fetchOffersList, updateFavorite} from '../../store/api-actions';
import {convertRatingToPercent, getArticleClassesForOfferCard, getImageWrapClassesForOfferCard, getCardInfoClassesForOfferCard} from '../../utils';

import {FavoriteStatus, LivingType, PageTypes, Routes} from '../../const';
import {OfferCardPropTypes} from '../../prop-types';

const OfferCard = ({offer = {}, onCardEnterMouse, onFavoriteClick, pageType}) => {
  const IMAGE_WIDTH = {
    FAVORITES: 150,
    OTHER: 260,
  };

  const IMAGE_HEIGHT = {
    FAVORITES: 110,
    OTHER: 200,
  };

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
    onCardEnterMouse(offer.id);
  };

  const handleMouseLeaveCard = () => {
    onCardEnterMouse(null);
  };

  const handleFavoriteClick = () => {
    onFavoriteClick({
      id,
      status: isFavorite ? FavoriteStatus.IS_NOT_FAVORITE : FavoriteStatus.IS_FAVORITE,
    }, pageType);
  };

  return (
    <article
      className={getArticleClassesForOfferCard(pageType)}
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
      <div className={getImageWrapClassesForOfferCard(pageType)}>
        <Link to={`${Routes.OFFER_LINK}/${id}`}>
          <img
            className="place-card__image"
            src={preview}
            width={pageType === PageTypes.FAVORITES ? IMAGE_WIDTH.FAVORITES : IMAGE_WIDTH.OTHER}
            height={pageType === PageTypes.FAVORITES ? IMAGE_HEIGHT.FAVORITES : IMAGE_HEIGHT.OTHER}
            alt="Place image"
          />
        </Link>
      </div>
      <div className={getCardInfoClassesForOfferCard(pageType)}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button button ${isFavorite ? `place-card__bookmark-button--active` : ``}`}
            onClick={handleFavoriteClick}
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
          <Link to={`${Routes.OFFER_LINK}/${id}`}>
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
  onCardEnterMouse: PropTypes.func.isRequired,
  onFavoriteClick: PropTypes.func.isRequired,
  pageType: PropTypes.oneOf([PageTypes.MAIN, PageTypes.OFFER, PageTypes.FAVORITES]).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onCardEnterMouse: (id) => dispatch(setActiveCard(id)),
  onFavoriteClick: (value, pageType) => {
    dispatch(updateFavorite(value));
    pageType === PageTypes.MAIN && dispatch(fetchOffersList());
    pageType === PageTypes.OFFER && dispatch(fetchNearbyOffers(value.id));
    pageType === PageTypes.FAVORITES && dispatch(fetchFavorite());
  },
});

export {OfferCard};
export default connect(null, mapDispatchToProps)(OfferCard);
