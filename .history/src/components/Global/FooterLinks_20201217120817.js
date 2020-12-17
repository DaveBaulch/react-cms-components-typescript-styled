import React from 'react';

const FooterLinks = (props) => {
  console.log(links);

  renderLinks() {
    return links.map((link, index) => {
      return (
        <li
          key={index}
        >
        test
        </li>
      );
    }); 
  };

  return <ul>{renderLinks()}</ul>;
};

export default FooterLinks;
