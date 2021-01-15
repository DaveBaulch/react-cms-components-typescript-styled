import PropTypes from 'prop-types';
import { Styled } from './Container.style';

const Container = ({ children }) => <div className="container">{children}</div>;

Container.propTypes = {
  children: PropTypes.any.isRequired
};

export default Container;
