import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {changeCityAction, setSortingTypeAction} from '../../store/action';
import {getCity, getSortedOffers} from '../../store/reducers/site-data/selectors';

import {Cities} from '../../const';
import {offerPropTypes} from '../../prop-types';

import Header from '../header/header';
import OffersList from '../offers-list/offers-list';
import OffersMap from '../offers-map/offers-map';
import CitiesList from '../cities-list/cities-list';
import OffersSorting from '../offers-sorting/offers-sorting';

const MainPage = ({city, cityOffers = [], history, onCityClick, onOptionClick}) => {
  return (
    <div className="page page--gray page--main">

      <Header
        history={history}
        isMainPage={true}
      />

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
                  history={history}
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
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  onCityClick: PropTypes.func.isRequired,
  onOptionClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  city: getCity(state),
  cityOffers: getSortedOffers(state),
});

const mapDispatchToProps = (dispatch) => ({
  onCityClick: (city) => dispatch(changeCityAction(city)),
  onOptionClick: (type) => dispatch(setSortingTypeAction(type)),
});

export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
