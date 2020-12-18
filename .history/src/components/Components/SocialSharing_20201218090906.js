import React from 'react';

  const SocialSharing = () => {
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
