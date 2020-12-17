import React from 'react';

const FooterLinks = (props) => {
  console.log(props.data);

  const renderedLinks = props.data.map((link) => {
    return <li key={link.id}><a href={link.link}></a> {link.title}</a></li>;
  });

  return <ul>{renderedLinks}</ul>;
};

export default FooterLinks;
