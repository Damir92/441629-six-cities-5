import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import {ROUTES} from '../../const/routes';

import AuthPage from '../auth-page/auth-page';
import FavoritesPage from '../favorites-page/favorites-page';
import MainPage from '../main-page/main-page';
import OfferPage from '../offer-page/offer-page';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={ROUTES.MAIN}>
          <MainPage />
        </Route>
        <Route exact path={ROUTES.LOGIN}>
          <AuthPage />
        </Route>
        <Route exact path={ROUTES.FAVORITES}>
          <FavoritesPage />
        </Route>
        <Route exact path={ROUTES.OFFER_PAGE}>
          <OfferPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
