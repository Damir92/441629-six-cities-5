import React, {useState} from 'react';
import PropTypes from 'prop-types';

import {updateObject} from '../../utils';

const withAuthForm = (Component) => {
  const WithAuthForm = (props) => {
    const {
      email = ``,
      password = ``,
    } = props;

    const [formInput, setFormInput] = useState({email, password});

    const handleChange = (evt) => {
      evt.persist();
      setFormInput((prevState) => updateObject(prevState, {
        [evt.target.name]: evt.target.value,
      }));
    };

    return (
      <Component
        {...props}
        onChange={handleChange}
        email={formInput.email}
        password={formInput.password}
      />
    );
  };

  WithAuthForm.propTypes = {
    email: PropTypes.string,
    password: PropTypes.string,
  };

  return WithAuthForm;
};

export default withAuthForm;
