import React from 'react';

const FooterLinks = ({footerItems}) => {
  console.log(footerItems);

  renderedLinks() {
    return footerItems.map((link) => {
      return (
        <li
          key={link.id}
        >
          {link.title}
        </li>
      );
    });
  };

  return <ul>{renderedLinks()</ul>;
};

export default FooterLinks;
