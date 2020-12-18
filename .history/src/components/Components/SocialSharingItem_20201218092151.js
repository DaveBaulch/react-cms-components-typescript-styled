import React from 'react';

const SocialSharingItem = ({ href, title }) => {
  return (
    <div>
      <a href={href} className="social-sharing-item"
      >{ title}</a>
    </div
  );
};

export default SocialSharingItem;