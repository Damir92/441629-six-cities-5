import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import {Cities, PageTypes, Routes} from '../../const';
import {OfferPropTypes} from '../../prop-types';

import {fetchFavorite} from '../../store/api-actions';
import {changeCityAction} from '../../store/action';
import {getFavoriteOffers} from '../../store/reducers/site-data/selectors';

import Header from '../header/header';
import OffersList from '../offers-list/offers-list';

const FavoritesPage = ({favoriteOffers = [], onLoad, onCityClick}) => {
  useEffect(() => {
    onLoad();
  }, []);

  const getCityOffers = (city) => favoriteOffers.filter((item) => item.city && item.city.name === city);

  return (
    <div className="page">

      <Header />

      <main className={`page__main page__main--favorites ${favoriteOffers.length === 0 ? `page__main--favorites-empty` : ``}`}>
        <div className="page__favorites-container container">
          {favoriteOffers.length === 0
            ?
            <section className="favorites favorites--empty">
              <h1 className="visually-hidden">Favorites (empty)</h1>
              <div className="favorites__status-wrapper">
                <b className="favorites__status">Nothing yet saved.</b>
                <p className="favorites__status-description">Save properties to narrow down search or plan yor future trips.</p>
              </div>
            </section>
            :
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">

                {Cities.map((city) => (
                  getCityOffers(city).length
                    ?
                    <li key={city} className="favorites__locations-items">
                      <div className="favorites__locations locations locations--current">
                        <div className="locations__item">
                          <Link
                            className="locations__item-link"
                            to={Routes.MAIN}
                            onClick={() => {
                              onCityClick(city);
                            }}
                          >
                            <span>{city}</span>
                          </Link>
                        </div>
                      </div>
                      <OffersList
                        cityOffers={getCityOffers(city)}
                        pageType={PageTypes.FAVORITES}
                      />
                    </li>
                    :
                    ``
                ))}

              </ul>
            </section>
          }
        </div>
      </main>
      <footer className="footer container">
        <Link
          className="footer__logo-link"
          to={Routes.MAIN}
        >
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </div>
  );
};

FavoritesPage.propTypes = {
  favoriteOffers: PropTypes.oneOfType([
    PropTypes.arrayOf(
        PropTypes.shape(OfferPropTypes).isRequired
    ).isRequired,
    PropTypes.array
  ]).isRequired,
  onLoad: PropTypes.func.isRequired,
  onCityClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  favoriteOffers: getFavoriteOffers(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLoad: () => dispatch(fetchFavorite()),
  onCityClick: (city) => dispatch(changeCityAction(city)),
});

export {FavoritesPage};
export default connect(mapStateToProps, mapDispatchToProps)(FavoritesPage);
