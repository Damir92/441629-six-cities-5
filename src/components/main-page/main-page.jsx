import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {changeCityAction, setSortingTypeAction} from '../../store/action';
import {getCity, getSortedOffers} from '../../store/reducers/site-data/selectors';
import {getAuthorizationStatus, getUserData} from '../../store/reducers/user/selectors';

import {offerPropTypes} from '../../prop-types';
import {AuthorizationStatus, Cities, Routes} from '../../const';

import OffersList from '../offers-list/offers-list';
import OffersMap from '../offers-map/offers-map';
import CitiesList from '../cities-list/cities-list';
import OffersSorting from '../offers-sorting/offers-sorting';

const MainPage = ({city, cityOffers = [], logged, userData, onCityClick, onOptionClick}) => {
  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link
                    className="header__nav-link header__nav-link--profile"
                    to={logged === AuthorizationStatus.AUTH
                      ?
                      Routes.FAVORITES
                      :
                      Routes.LOGIN
                    }
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    {logged === AuthorizationStatus.AUTH
                      ?
                      <span className="header__user-name user__name">
                        {userData.email}
                      </span>
                      :
                      <span className="header__login">Sign in</span>
                    }
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">

            <CitiesList
              city={city}
              onCityClick={onCityClick}
            />

          </section>
        </div>
        <div className="cities">
          <div className={`cities__places-container container ${cityOffers.length === 0 ? `cities__places-container--empty` : ``}`}>

            {cityOffers.length === 0
              ?
              <section className="cities__no-places">
                <div className="cities__status-wrapper tabs__content">
                  <b className="cities__status">No places to stay available</b>
                  <p className="cities__status-description">We could not find any property available at the moment in {city}</p>
                </div>
              </section>
              :
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{cityOffers.length} places to stay in {city}</b>

                <OffersSorting
                  onOptionClick={onOptionClick}
                />

                <OffersList
                  cityOffers={cityOffers}
                />

              </section>
            }

            <div className="cities__right-section">
              <section className="cities__map map">
                <OffersMap
                  cityOffers={cityOffers}
                />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

MainPage.propTypes = {
  city: PropTypes.oneOf(Cities).isRequired,
  cityOffers: PropTypes.arrayOf(
      PropTypes.shape(offerPropTypes).isRequired
  ).isRequired,
  logged: PropTypes.oneOf([AuthorizationStatus.AUTH, AuthorizationStatus.NO_AUTH]).isRequired,
  userData: PropTypes.oneOf([PropTypes.shape({
    email: PropTypes.string,
  }), ``]),
  onCityClick: PropTypes.func.isRequired,
  onOptionClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  city: getCity(state),
  cityOffers: getSortedOffers(state),
  logged: getAuthorizationStatus(state),
  userData: getUserData(state),
});

const mapDispatchToProps = (dispatch) => ({
  onCityClick: (city) => dispatch(changeCityAction(city)),
  onOptionClick: (type) => dispatch(setSortingTypeAction(type)),
});

export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
