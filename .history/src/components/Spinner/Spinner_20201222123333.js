const Spinner = ({ message = 'Loading...' }) => {
  return (
    <div className="spinner-background">
      <div className="loader">{message}</div>
    </div>
  );
};

export default Spinner;
