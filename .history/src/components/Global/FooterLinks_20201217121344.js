import React from 'react';

const FooterLinks = ({footerItems}) => {
  console.log(footerItems);

  renderedLinks() {
   const renderedList = footerItems.map((link) => {
      return (
        <li
          key={link.id}
        >
          {link.title}
        </li>
      );
    });
  };

  return <ul>{renderedLinks()}</ul>;
};

export default FooterLinks;
