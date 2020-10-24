import React, {useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {setSortingTypeAction} from '../../store/action';

import {SortingTypes, SortingTitles} from '../../const';

const OffersSorting = ({sortingType, onSortingClick}) => {
  const [openedList, setOpenedList] = useState(false);

  const handleStartSorting = () => {
    setOpenedList((prev) => !prev);
  };

  const handleSortingTypeClick = (value) => {
    onSortingClick(value);
    setOpenedList(false);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex="0"
        onClick={handleStartSorting}
      >
        {SortingTitles[sortingType]}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${openedList ? `places__options--opened` : ``}`}>
        {SortingTypes.map((item) => (
          <li
            key={item}
            className={`places__option ${item === sortingType ? `places__option--active` : ``}`}
            tabIndex="0"
            onClick={() => handleSortingTypeClick(item)}
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
  sortingType: PropTypes.string.isRequired,
  onSortingClick: PropTypes.func.isRequired,
};

const mapStateToProps = ({sortingType}) => ({sortingType});

const mapDispatchToProps = (dispatch) => ({
  onSortingClick: (sortingType) => dispatch(setSortingTypeAction(sortingType)),
});

export {OffersSorting};
export default connect(mapStateToProps, mapDispatchToProps)(OffersSorting);
