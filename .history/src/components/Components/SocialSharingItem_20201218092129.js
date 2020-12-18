import React from 'react';

const SocialSharingItem = ({ href, title }) => {
  return (
    <div>
      <a href={href} className="social-sharing-item"
      >{ props.title}</a>
    </div>
  );
};

export default SocialSharingItem;