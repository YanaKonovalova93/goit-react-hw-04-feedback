import React from 'react';
import PropTypes from 'prop-types';
import { Btn } from './FeedbackOtpions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(item => {
    return (
      <Btn
        key={item}
        onClick={() => {
          onLeaveFeedback(item);
        }}
      >
        {item}
      </Btn>
    );
  });
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};
