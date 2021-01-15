
import PropTypes from 'prop-types';
import './Row.scss';

const Row = ({ children }) => <div className="row">{children}</div>;

Row.propTypes = {
  children: PropTypes.any.isRequired
};

export default Row;
