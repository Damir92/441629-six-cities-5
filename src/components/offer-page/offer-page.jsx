import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {OfferPropTypes, OfferPagePropTypes, ReviewPropTypes} from '../../prop-types';
import {AuthorizationStatus, FavoriteStatus, LivingType, PageTypes, Routes} from '../../const';
import {convertRatingToPercent} from '../../utils';

import {getActiveOffer, getReviews, getNearbyOffers} from '../../store/reducers/site-data/selectors';
import {getAuthorizationStatus} from '../../store/reducers/user/selectors';
import {fetchActiveOffer, fetchReviews, postReview, fetchNearbyOffers, updateFavorite} from '../../store/api-actions';
import {unsetActiveOfferAction} from '../../store/action';

import Header from '../header/header';
import ReviewsList from '../reviews-list/reviews-list';
import ReviewForm from '../review-form/review-form';
import OffersList from '../offers-list/offers-list';
import OffersMap from '../offers-map/offers-map';

const OfferPage = (props) => {
  const {
    nearbyOffers,
    logged,
    history,
    match,
    offer = {},
    onFavoriteClick,
    onLoad,
    onSendForm,
    reviews = [],
    unsetActiveOffer,
  } = props;

  const offerId = +match.params.id;

  useEffect(() => () => unsetActiveOffer(), []);

  useEffect(() => onLoad(offerId), [match.params.id]);

  const {
    bedrooms,
    description,
    goods,
    host,
    images,
    isFavorite,
    isPremium,
    volume,
    price,
    rating,
    title,
    type,
  } = offer;

  const handleFavoriteClick = () => {
    if (logged === AuthorizationStatus.NO_AUTH) {
      history.push(Routes.LOGIN);
    } else {
      onFavoriteClick({
        id: offerId,
        status: isFavorite ? FavoriteStatus.IS_NOT_FAVORITE : FavoriteStatus.IS_FAVORITE,
      });
    }
  };

  return (
    <div className="page">

      <Header />

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images && images.slice(0, 6).map((image) => (
                <div
                  key={image}
                  className="property__image-wrapper"
                >
                  <img className="property__image" src={image} alt="Photo studio" />
                </div>
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {
                isPremium
                &&
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              }
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button
                  className={`property__bookmark-button button ${isFavorite ? `property__bookmark-button--active` : ``}`}
                  type="button"
                  onClick={handleFavoriteClick}
                >
                  <svg className="property__bookmark-icon place-card__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">
                    {isFavorite ? `In bookmarks` : `To bookmarks`}
                  </span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: convertRatingToPercent(rating)}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {LivingType[type]}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {volume} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods && goods.map((item) => (
                    <li
                      key={item}
                      className="property__inside-item"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={`property__avatar-wrapper user__avatar-wrapper ${host && host.isPro ? `property__avatar-wrapper--pro` : ``}`}>
                    <img className="property__avatar user__avatar" src={host && host.avatar} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {host && host.name}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length || 0}</span></h2>

                <ReviewsList
                  reviews={reviews}
                />

                {logged === AuthorizationStatus.AUTH
                  ?
                  <ReviewForm
                    id={offerId}
                    onSubmit={onSendForm}
                  />
                  :
                  null
                }

              </section>
            </div>
          </div>

          <section className="property__map map">

            {nearbyOffers
              ?
              <OffersMap
                activeOffer={offer}
                offers={nearbyOffers}
              />
              :
              null}

          </section>

        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>

            {nearbyOffers
              ?
              <OffersList
                cityOffers={nearbyOffers}
                pageType={PageTypes.OFFER}
              />
              :
              null}

          </section>
        </div>
      </main>
    </div>
  );
};

OfferPage.propTypes = {
  offer: PropTypes.oneOfType([
    PropTypes.shape(OfferPagePropTypes).isRequired,
    PropTypes.shape({}).isRequired
  ]).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  match: PropTypes.object.isRequired,
  nearbyOffers: PropTypes.arrayOf(
      PropTypes.shape(OfferPropTypes).isRequired
  ).isRequired,
  logged: PropTypes.oneOf([AuthorizationStatus.AUTH, AuthorizationStatus.NO_AUTH]).isRequired,
  onFavoriteClick: PropTypes.func.isRequired,
  onLoad: PropTypes.func.isRequired,
  onSendForm: PropTypes.func.isRequired,
  reviews: PropTypes.arrayOf(
      PropTypes.shape(ReviewPropTypes)
  ).isRequired,
  unsetActiveOffer: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  logged: getAuthorizationStatus(state),
  nearbyOffers: getNearbyOffers(state),
  offer: getActiveOffer(state),
  reviews: getReviews(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLoad: (id) => {
    dispatch(fetchActiveOffer(id));
    dispatch(fetchReviews(id));
    dispatch(fetchNearbyOffers(id));
  },
  onFavoriteClick: (value) => dispatch(updateFavorite(value)),
  onSendForm: (reviewData) => dispatch(postReview(reviewData)),
  unsetActiveOffer: () => dispatch(unsetActiveOfferAction()),
});

export {OfferPage};
export default connect(mapStateToProps, mapDispatchToProps)(OfferPage);
