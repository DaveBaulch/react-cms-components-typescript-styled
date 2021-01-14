import React from 'react';
import PropTypes from 'prop-types';
import './Spinner.scss';
import SpinnerIcon from '../SpinnerIcon';

const Spinner = ({ message = 'Loading...' }) => (
  <div className="spinner-background">
    <div className="spinner">
      <SpinnerIcon />
      <p>{message}</p>
    </div>
  </div>
);

SocialSharingItem.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired
};


export default Spinner;
