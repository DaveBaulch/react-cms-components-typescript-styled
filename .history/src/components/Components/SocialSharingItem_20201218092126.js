import React from 'react';

const SocialSharingItem = ({ href, title }) => {
  return (
    <div>
      <a href={href} className="social-sharing-item"
      >{ props.t}</a>
    </div>
  );
};

export default SocialSharingItem;