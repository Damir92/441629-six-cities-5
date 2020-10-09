import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import PropTypes from 'prop-types';

import {Routes} from '../../const/routes';
import {offerPropTypes} from '../../prop-types';

import AuthPage from '../auth-page/auth-page';
import FavoritesPage from '../favorites-page/favorites-page';
import MainPage from '../main-page/main-page';
import OfferPage from '../offer-page/offer-page';

const App = ({offers}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={Routes.MAIN}>
          <MainPage />
        </Route>
        <Route exact path={Routes.LOGIN}>
          <AuthPage />
        </Route>
        <Route exact path={Routes.FAVORITES}>
          <FavoritesPage />
        </Route>
        <Route exact path={Routes.OFFER_PAGE}>
          <OfferPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offers: PropTypes.arrayOf(
    PropTypes.shape(offerPropTypes).isRequired
  ).isRequired,
};

export default App;
