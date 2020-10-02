import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import AuthPage from '../auth-page/auth-page';
import FavoritesPage from '../favorites-page/favorites-page';
import MainPage from '../main-page/main-page';
import OfferPage from '../offer-page/offer-page';

const App = ({offersCount}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage
            offersCount={offersCount}
          />
        </Route>
        <Route exact path="/login">
          <AuthPage />
        </Route>
        <Route exact path="/favorites">
          <FavoritesPage />
        </Route>
        <Route exact path="/offer/:id">
          <OfferPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offersCount: PropTypes.number.isRequired,
};

export default App;
