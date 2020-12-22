import React from 'react';
import './SpinnerIcon.scss';

const SocialSharingItem = () => {
  return (
    <React.Fragment>
      <a href={href} className="social-sharing-item">
        {children}
      </a>
    </React.Fragment>
  );
};

export default SocialSharingItem;
