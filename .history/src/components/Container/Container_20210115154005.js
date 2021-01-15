import React from 'react';
import PropTypes from 'prop-types';
import './Container.scss';

const Container = ({ children }) => (
  <div className="container">{children}</div>
);

Button.propTypes = {
  children: PropTypes.any.isRequired
};

export default Container;
