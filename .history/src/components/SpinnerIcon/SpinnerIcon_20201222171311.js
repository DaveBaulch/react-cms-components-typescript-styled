import React from 'react';
import './S[inner\Icon].scss';

const SocialSharingItem = ({ href, children }) => {
  return (
    <React.Fragment>
      <a href={href} className="social-sharing-item">
        {children}
      </a>
    </React.Fragment>
  );
};

export default SocialSharingItem;
