const Spinner = ({ message = 'Loading...' }) => {
  return (
    <div className="r">
      <div className="loader">{message}</div>
    </div>
  );
};

export default Spinner;
