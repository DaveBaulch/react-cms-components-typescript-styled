import React from 'react';

const SocialSharingItem = () => {
  return (
    <div>
  <a :href="href"
    class="social-sharing-item"
    ><slot /></a>
    </div>
  );
};

export default SocialSharingItem;