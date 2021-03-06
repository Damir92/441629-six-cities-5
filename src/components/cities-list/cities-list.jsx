import React from 'react';
import PropTypes from 'prop-types';

import {Cities} from '../../const';

const CitiesList = ({city, onCityClick}) => {
  const handleCityClick = (evt) => {
    evt.preventDefault();
    onCityClick(evt.currentTarget.textContent);
  };

  return (
    <ul className="locations__list tabs__list">
      {Cities.map((item) => (
        <li
          key={item}
          className="locations__item"
        >
          <a
            className={`locations__item-link tabs__item ${city === item ? `tabs__item--active` : ``}`}
            href="#"
            onClick={handleCityClick}
          >
            <span>{item}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

CitiesList.propTypes = {
  city: PropTypes.oneOf(Cities).isRequired,
  onCityClick: PropTypes.func.isRequired,
};

export default CitiesList;
