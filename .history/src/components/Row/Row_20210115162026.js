import PropTypes from 'prop-types';
import { Styled } from './Row.style';

const Row = ({ children }) => <Styled.Container>{children}</Styled.Container>;

Container.propTypes = {
  children: PropTypes.any.isRequired
};

export default Container;
