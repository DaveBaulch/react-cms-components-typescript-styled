import React from 'react';

const FooterLinks = (props) => {
  console.log(props.data);

  const renderedLinks = props.data.map((link) => {
    return <li key={link.id}>{link.title}</li>;
  });

  return <ul>{ }}</ul>;
};

export default FooterLinks;
