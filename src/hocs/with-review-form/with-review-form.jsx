import React, {useState} from 'react';
import PropTypes from 'prop-types';

import {updateObject} from '../../utils';

const withReviewForm = (Component) => {
  const WithReviewForm = (props) => {
    const {
      id,
      onSubmit,
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

    const handleSubmit = (evt) => {
      evt.preventDefault();

      onSubmit({
        id,
        comment: formInput.review,
        rating: formInput.rating,
      });

      setFormInput({
        rating: ``,
        review: ``,
      });
    };

    return (
      <Component
        {...props}
        onChange={handleChange}
        onSubmit={handleSubmit}
        rating={formInput.rating}
        review={formInput.review}
      />
    );
  };

  WithReviewForm.propTypes = {
    id: PropTypes.number.isRequired,
    onSubmit: PropTypes.func.isRequired,
    rating: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    review: PropTypes.string,
  };

  return WithReviewForm;
};

export default withReviewForm;
