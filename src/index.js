import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/app';

const OFFERS_COUNT = 123;
// Здесь это временно, дальше будет считаться исходя из данных с сервера

ReactDOM.render(
    <App
      offersCount={OFFERS_COUNT}
    />,
    document.querySelector(`#root`)
);
