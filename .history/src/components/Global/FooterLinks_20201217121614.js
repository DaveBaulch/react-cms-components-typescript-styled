import React from 'react';

const FooterLinks = ({ data }) => {
  console.log(props;

  const renderedLinks = data.map((link) => {
    return <li key={link.id}>{link.title}</li>;
  });

  return <ul>{renderedLinks}</ul>;
};

export default FooterLinks;
