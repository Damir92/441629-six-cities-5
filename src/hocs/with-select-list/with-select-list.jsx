import React, {useState} from 'react';
import PropTypes from 'prop-types';

const withSelectList = (Component) => {
  const WithSelectList = (props) => {
    const {
      onOptionClick,
    } = props;

    const [openedList, setOpenedList] = useState(false);

    const handleOpenList = () => {
      setOpenedList((prev) => !prev);
    };

    const handleOptionClick = (value) => {
      onOptionClick(value);
      setOpenedList(false);
    };

    return (
      <Component
        {...props}
        openedList={openedList}
        onOpenList={handleOpenList}
        onOptionClick={handleOptionClick}
      />
    );
  };

  WithSelectList.propTypes = {
    onOptionClick: PropTypes.func.isRequired,
  };

  return WithSelectList;
};

export default withSelectList;
