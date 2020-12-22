const Spinner = ({ message = 'Loading...' }) => {
  return (
    <div className="background">
      <div className="loader">{message}</div>
    </div>
  );
};

export default Spinner;
