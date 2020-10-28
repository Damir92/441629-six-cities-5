import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {SortingTypes, SortingTitles} from '../../const';

import withToggle from '../../hocs/with-toggle/with-toggle';

const OffersSorting = ({toggle, onOptionClick, onToggleClick, sortingType}) => {

  const handleOptionClick = (value) => {
    onOptionClick(value);
    onToggleClick();
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex="0"
        onClick={onToggleClick}
      >
        {SortingTitles[sortingType]}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${toggle ? `places__options--opened` : ``}`}>
        {SortingTypes.map((item) => (
          <li
            key={item}
            className={`places__option ${item === sortingType ? `places__option--active` : ``}`}
            tabIndex="0"
            onClick={() => handleOptionClick(item)}
          >
            {SortingTitles[item]}
          </li>
        ))}
      </ul>
      <select
        className="places__sorting-type visually-hidden"
        id="places-sorting"
        value={sortingType}
        onChange={() => {}}
      >
        {SortingTypes.map((item) => (
          <option
            key={item}
            className={`places__option ${item}`}
            value={item}
          >
            {SortingTitles[item]}
          </option>
        ))}
      </select>
    </form>
  );
};

OffersSorting.propTypes = {
  toggle: PropTypes.bool.isRequired,
  onOptionClick: PropTypes.func.isRequired,
  onToggleClick: PropTypes.func.isRequired,
  sortingType: PropTypes.string.isRequired,
};

const mapStateToProps = ({sortingType}) => ({sortingType});

export {OffersSorting};
export default connect(mapStateToProps)(withToggle(OffersSorting));
