import React from 'react';

const FooterLinks = ({ links }) => {
  console.log(links);

  renderLinks() {
   return links.map((link, index) => {
      return (
        <li
          key={index}
        >

        </li>
      );
    }); 
  } 
  return <ul>{renderLinks()}</ul>;
};

export default FooterLinks;
