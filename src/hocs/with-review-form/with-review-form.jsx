import React, {useState} from 'react';

const withReviewForm = (Component) => {
  const WithReviewForm = (props) => {
    const [rating, setRating] = useState(``);
    const [text, setText] = useState(``);

    const handleChangeRating = (evt) => {
      const value = evt.target.value;
      setRating(value);
    };

    const handleChangeText = (evt) => {
      const value = evt.target.value;
      setText(value);
    };

    return (
      <Component
        {...props}
        onRatingChange={handleChangeRating}
        onTextChange={handleChangeText}
        rating={rating}
        text={text}
      />
    );
  };

  return WithReviewForm;
};

export default withReviewForm;
