import React from 'react';

const FooterLinks = ({}) => {
  console.log(props);

  const renderedLinks = props.map((link) => {
    return <li key={link.id}>{link.title}</li>;
  });

  return <ul>{renderedLinks}</ul>;
};

export default FooterLinks;
