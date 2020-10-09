import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import {Routes} from '../../const';
import {offers} from '../../mocks/offers';

import AuthPage from '../auth-page/auth-page';
import FavoritesPage from '../favorites-page/favorites-page';
import MainPage from '../main-page/main-page';
import OfferPage from '../offer-page/offer-page';

const App = () => {
  const getOffer = (pathname) => {
    const id = +pathname.replace(Routes.OFFER_LINK, ``);

    return offers.find((item) => item.id === id);
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={Routes.MAIN}>
          <MainPage
            offers={offers}
          />
        </Route>
        <Route exact path={Routes.LOGIN}>
          <AuthPage />
        </Route>
        <Route exact path={Routes.FAVORITES}>
          <FavoritesPage />
        </Route>
        <Route
          exact
          path={Routes.OFFER_PAGE}
          render={({history}) => (
            <OfferPage
              offer={getOffer(history.location.pathname)}
            />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
