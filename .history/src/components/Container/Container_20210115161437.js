import PropTypes from 'prop-types';
import { Styled } from './ProductCard.style';
const Container = ({ children }) => <div className="container">{children}</div>;

Container.propTypes = {
  children: PropTypes.any.isRequired
};

export default Container;
