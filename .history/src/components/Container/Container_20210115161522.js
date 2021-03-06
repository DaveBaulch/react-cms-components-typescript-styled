import PropTypes from 'prop-types';
import { Styled } from './Container.style';

const Container = ({ children }) => <Styled.ProductCardPrice>{children}<Styled.ProductCardPrice>

Container.propTypes = {
  children: PropTypes.any.isRequired
};

export default Container;
