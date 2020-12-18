import React from 'react';

const SocialSharingItem = (props) => {
  return (
    <div>
      <a href={props.href} className="social-sharing-item">
        {props.children}
      </a>
    </div>
  );
};

export default SocialSharingItem;
