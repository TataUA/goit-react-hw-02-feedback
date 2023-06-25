import React from 'react';
import PropTypes from 'prop-types';
import {Options} from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <Options>Good: {good}</Options>
      <Options>Neutral: {neutral}</Options>
      <Options>Bad: {bad}</Options>
      <Options>Total: {total}</Options>
      <Options>PositivePercentage: {positivePercentage} %</Options>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
