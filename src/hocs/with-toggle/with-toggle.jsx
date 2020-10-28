import React, {useState} from 'react';
import PropTypes from 'prop-types';

const withToggle = (Component) => {
  const WithToggle = (props) => {
    const {
      toggleState = false,
    } = props;

    const [toggle, setToggle] = useState(toggleState);

    const handleToggleClick = () => {
      setToggle((prev) => !prev);
    };

    return (
      <Component
        {...props}
        toggle={toggle}
        onToggleClick={handleToggleClick}
      />
    );
  };

  WithToggle.propTypes = {
    toggleState: PropTypes.bool,
  };

  return WithToggle;
};

export default withToggle;
