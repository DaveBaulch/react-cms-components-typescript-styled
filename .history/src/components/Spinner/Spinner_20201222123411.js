import './SocialSharingItem.scss';

const Spinner = ({ message = 'Loading...' }) => {
  return (
    <div className="spinner-background">
      <div className="spinner">{message}</div>
    </div>
  );
};

export default Spinner;
