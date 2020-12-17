import React from 'react';

const FooterLinks = ({ links }) => {
  console.log(links);

  const renderLinks = links.map((link) => {
      return ( 
          <li>test</li>
      );
    })
  }

  return <div>{this.renderLinks()}</div>;
};

export default FooterLinks;
