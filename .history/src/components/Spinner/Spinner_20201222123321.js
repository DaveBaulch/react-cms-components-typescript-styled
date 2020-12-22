const Spinner = ({ message = 'Loading...' }) => {
  return (
    <div className="ui active dimmer">
      <div className="loader">{message}</div>
    </div>
  );
};

export default Spinner;
