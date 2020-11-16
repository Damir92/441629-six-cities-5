import React from 'react';
import {Switch, Route, Router} from 'react-router-dom';

import {Routes, AuthorizationStatus} from '../../const';

import AuthPage from '../auth-page/auth-page';
import FavoritesPage from '../favorites-page/favorites-page';
import MainPage from '../main-page/main-page';
import OfferPage from '../offer-page/offer-page';
import PrivateRoute from '../private-route/private-route';

import browserHistory from '../../browser-history';

const App = () =>
  <Router history={browserHistory}>
    <Switch>
      <Route exact path={Routes.MAIN} component={MainPage} />
      <PrivateRoute
        path={Routes.FAVORITES}
        render={(props) => <FavoritesPage {...props} />}
        redirectTo={Routes.LOGIN}
        conditionValue={AuthorizationStatus.AUTH}
      />
      <PrivateRoute
        path={Routes.LOGIN}
        render={(props) => <AuthPage {...props} />}
        redirectTo={Routes.MAIN}
        conditionValue={AuthorizationStatus.NO_AUTH}
      />
      <Route
        exact
        path={Routes.OFFER_PAGE}
        component={OfferPage}
      />
    </Switch>
  </Router>;

export default App;
