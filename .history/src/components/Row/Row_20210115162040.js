import PropTypes from 'prop-types';
import { Styled } from './Row.style';

const Row = ({ children }) => <Styled.Row>{children}</Styled.Row>;

Row.propTypes = {
  children: PropTypes.any.isRequired
};

export default Row;
