import React from 'react';
import '~/sass/components/_social-sharing-item.scss';

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
