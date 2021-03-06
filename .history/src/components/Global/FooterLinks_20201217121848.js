import React from 'react';

const FooterLinks = (props) => {
  console.log(props.data);

  const renderedLinks = props.data.map((link) => {
    return <li key={link.id}><a {link.title}</li>;
  });

  return <ul>{renderedLinks}</ul>;
};

export default FooterLinks;
