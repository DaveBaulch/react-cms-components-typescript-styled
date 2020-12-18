import React from 'react';

const SocialSharing = ({ data }) => {
  const renderedLinks = data.map((link) => {
    return (
      <li className="footer-links__item" key={link.id}>
        <a href={link.link}>{link.title}</a>
      </li>
    );
  })
  const Header = ({ onNavClick }) => {
    return (
      <div className="header-container">
        <div className="container">
          <header className="header">
            <SidenavToggle onNavClick={onNavClick} />
            <div className="logo">
              <a href="/" className="logo__link">
                Site logo
              </a>
            </div>
            <div className="navigation-items"></div>
          </header>
        </div>
      </div>
    );
  };

  return <ul className="footer-links">{renderedLinks}</ul>;
};

export default SocialSharing;
