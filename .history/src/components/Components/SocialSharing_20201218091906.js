import React from 'react';

const SocialSharing = () => {
  return (
    <div className="social-links-wrapper">
      <h2 className="social-links-title">Follow Us</h2>
      <ul className="social-links">
        <li className="social-links__item">
          <SocialSharingItem :href="socialLinks.twitterLink">
            <img src="@/assets/images/svg/icon-footer-twitter.svg" width="20" height="16" alt="Twitter" />
            <span className="sr-only">Twitter</span>
          </SocialSharingItem>
        </li>

      </ul>
    </div>
  );
};

export default SocialSharing;
