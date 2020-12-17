import React from 'react';

const Header = () => {
  return (
    <div class="header-container">
  <div class="container">
    <header class="header">
      <TheSideNavToggle />
      <div class="logo">
        <router-link to="/" class="logo__link">Site logo</router-link>
      </div>
      <div class="navigation-items">
        <!-- <ul class="nav-list">
          <router-link to="test-page" class="nav-list__item">Test page 1</router-link> |
        </ul> -->
      </div>
    </header>
  </div>
</div>
  );
};

export default Header;
