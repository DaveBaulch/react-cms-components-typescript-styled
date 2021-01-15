import PropTypes from 'prop-types';
import './Container.scss';

const Container = ({ children }) => <div className="container">{children}</div>;

Container.propTypes = {
  children: PropTypes.any.isRequired
};

export default Container;
