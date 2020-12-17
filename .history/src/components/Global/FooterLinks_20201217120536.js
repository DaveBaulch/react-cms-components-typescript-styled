import React from 'react';

const FooterLinks = ({ links }) => {
  console.log(links);

  const renderLinks = links.map((link) => {
      return ( 
        test
      );
    })
  }

  return <ul>{renderLinks()}</ul>;
};

export default FooterLinks;
