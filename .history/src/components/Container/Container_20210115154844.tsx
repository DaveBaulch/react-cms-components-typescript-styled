import PropTypes from 'prop-types';
import './Container.style.tsx';

const Container = ({ children }) => <div className="container">{children}</div>;

Container.propTypes = {
  children: PropTypes.any.isRequired
};

export default Container;
