import React from 'react';

const SocialSharingItem = (props) => {
  return (
    <div>
      <a href={href} className="social-sharing-item">
        {props.children}
      </a>
    </div>
  );
};

export default SocialSharingItem;
