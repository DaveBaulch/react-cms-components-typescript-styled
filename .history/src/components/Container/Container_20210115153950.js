import React from 'react';
import PropTypes from 'prop-types';
import './Container.scss';

const Container = ({ children }) => (
  <button className="">{children}</button>
);

Button.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.any.isRequired
};

export default Button;
