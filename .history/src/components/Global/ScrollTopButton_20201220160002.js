import React from 'react';
import '../../sass/components/_scroll-top-button.scss';

const ScrollTopButton = (props) => {
  return (
    <a class="btn-scroll-top" : class="{ active: buttonVisible }"
      {props.children}
  </a>
  );
};

export default ScrollTopButton;

import React from 'react';
import '../../sass/components/_social-sharing-item.scss';

const SocialSharingItem = (props) => {
  return (
    <React.Fragment>
      <a href={props.href} className="social-sharing-item">
        {props.children}
      </a>
    </React.Fragment>
  );
};

export default SocialSharingItem;


