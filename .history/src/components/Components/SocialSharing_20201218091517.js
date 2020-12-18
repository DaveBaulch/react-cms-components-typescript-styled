import React from 'react';

  const SocialSharing = () => {
    return (
      <div className="social-links-wrapper">
        <h2 className="social-links-title">Follow Us</h2>
        <ul className="social-links">
          <li className="social-links__item" v-if="socialLinks.twitterLink">
            <TheSocialSharingItem :href="socialLinks.twitterLink">
              <img src="@/assets/images/svg/icon-footer-twitter.svg" width="20" height="16" alt="Twitter" />
              <span class="sr-only">Twitter</span>
            </TheSocialSharingItem>
          </li>
          <li className="social-links__item" v-if="socialLinks.linkedinLink">
            <TheSocialSharingItem :href="socialLinks.linkedinLink">
              <img src="@/assets/images/svg/icon-footer-linkedin.svg" width="21" height="21" alt="LinkedIn" />
              <span class="sr-only">LinkedIn</span>
            </TheSocialSharingItem>
          </li>
          <li className="social-links__item">
            <TheSocialSharingItem :href="socialLinks.facebookLink">
              <img src="@/assets/images/svg/icon-footer-facebook.svg" width="21" height="21" alt="Facebook" />
              <span class="sr-only">Facebook</span>
            </TheSocialSharingItem>
          </li>
          <li className="social-links__item">
            <TheSocialSharingItem :href="socialLinks.youtubeLink">
              <img src="@/assets/images/svg/icon-footer-youtube.svg" width="22" height="16" alt="YouTube" />
              <span className="sr-only">YouTube</span>
            </TheSocialSharingItem>
          </li>
        </ul>
      </div>  
    );
  }
};

export default SocialSharing;
