import React from 'react';

const FooterLinks = (props) => {
  console.log(props);

  const renderedLinks = props.footerItems.map((link) => {
    return <li key={link.id}>{link.title}</li>;
  });

  return <ul>{renderedLinks}</ul>;
};

export default FooterLinks;
