import React from 'react';
import {Switch, Route, Router} from 'react-router-dom';

import {Routes} from '../../const';

import AuthPage from '../auth-page/auth-page';
import FavoritesPage from '../favorites-page/favorites-page';
import MainPage from '../main-page/main-page';
import OfferPage from '../offer-page/offer-page';
import PrivateRoute from '../private-route/private-route';

import browserHistory from '../../browser-history';

const App = () => {
  return (
    <Router history={browserHistory}>
      <Switch>
        <Route exact path={Routes.MAIN} component={MainPage} />
        <Route exact path={Routes.LOGIN}>
          <AuthPage />
        </Route>
        <PrivateRoute
          path={Routes.FAVORITES}
          render={(props) => <FavoritesPage {...props} />}
        />
        <Route exact path={Routes.FAVORITES}>
          <FavoritesPage />
        </Route>
        <Route
          exact
          path={Routes.OFFER_PAGE}
          component={OfferPage}
        />
      </Switch>
    </Router>
  );
};

export default App;
