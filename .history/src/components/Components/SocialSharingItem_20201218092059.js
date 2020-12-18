import React from 'react';

const SocialSharingItem = () => {
  return (
    <div>
      <a href="href" className="social-sharing-item"
      ><slot /></a>
    </div>
  );
};

export default SocialSharingItem;