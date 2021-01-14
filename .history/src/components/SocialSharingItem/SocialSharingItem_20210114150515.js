import React from 'react';
import PropTypes from 'prop-types';
import './SocialSharingItem.scss';

const SocialSharingItem = ({ href, children }) => (
  <a href={href} className="social-sharing-item">
    {children}
  </a>
);

SocialSharing.propTypes = {
  twitterLink: PropTypes.string.isRequired,
  linkedinLink: PropTypes.string.isRequired,
  facebookLink: PropTypes.string.isRequired,
  youtubeLink: PropTypes.string.isRequired
};

export default SocialSharingItem;
