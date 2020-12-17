import React from 'react';

const FooterLinks = (props) => {
  // console.log(props.data);

  const renderedLinks = props.data.map((link) => {
    return (
      <li className=" " key={link.id}>
        <a href={link.link}>{link.title}</a>
      </li>
    );
  });

  return <ul className="footer-links">{renderedLinks}</ul>;
};

export default FooterLinks;
