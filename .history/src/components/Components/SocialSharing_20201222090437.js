import React from 'react';
import SocialSharingItem from './SocialSharingItem';
import '../../sass/components/_social-sharing.scss';

const SocialSharing = ({
  twitterLink,
  linkedinLink,
  facebookLink,
  youtubeLink
}) => {
  return (
    <div className="social-links-wrapper">
      <h2 className="social-links-title">Follow Us</h2>
      <ul className="social-links">
        <li className="social-links__item">
          <SocialSharingItem href={twitterLink}>
            <img
              src="images/svg/icon-footer-twitter.svg"
              width="20"
              height="16"
              alt="Twitter"
            />
            <span className="sr-only">Twitter</span>
          </SocialSharingItem>
        </li>
        <li className="social-links__item">
          <SocialSharingItem href={linkedinLink}>
            <img
              src="images/svg/icon-footer-linkedin.svg"
              width="21"
              height="21"
              alt="LinkedIn"
            />
            <span className="sr-only">LinkedIn</span>
          </SocialSharingItem>
        </li>
        <li className="social-links__item">
          <SocialSharingItem href={facebookLink}>
            <img
              src="images/svg/icon-footer-facebook.svg"
              width="21"
              height="21"
              alt="Facebook"
            />
            <span className="sr-only">Facebook</span>
          </SocialSharingItem>
        </li>
        <li className="social-links__item">
          <SocialSharingItem href={youtubeLink}>
            <img
              src="images/svg/icon-footer-youtube.svg"
              width="22"
              height="16"
              alt="YouTube"
            />
            <span className="sr-only">YouTube</span>
          </SocialSharingItem>
        </li>
      </ul>
    </div>
  );
};

export default SocialSharing;
