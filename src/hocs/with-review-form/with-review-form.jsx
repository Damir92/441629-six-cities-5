import React, {useState} from 'react';
import PropTypes from 'prop-types';

import {updateObject} from '../../utils';

const withReviewForm = (Component) => {
  const WithReviewForm = (props) => {
    const {
      rating = ``,
      review = ``,
    } = props;

    const [formInput, setFormInput] = useState({rating, review});

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
        rating={formInput.rating}
        review={formInput.review}
      />
    );
  };

  WithReviewForm.propTypes = {
    rating: PropTypes.oneOf([PropTypes.number, PropTypes.string]),
    review: PropTypes.string,
  };

  return WithReviewForm;
};

export default withReviewForm;
