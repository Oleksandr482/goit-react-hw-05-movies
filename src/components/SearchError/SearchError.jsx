import React from 'react';
import Icon404 from '../../images/img404.png';
import PropTypes from 'prop-types';
import { ErrWrapper } from './SearchError.styled';

export const SearchError = ({ message }) => {
  return (
    <ErrWrapper>
      <p>{message}</p>
      <img src={Icon404} alt="no-images" />
    </ErrWrapper>
  );
};

SearchError.propTypes = {
  message: PropTypes.string.isRequired,
};
