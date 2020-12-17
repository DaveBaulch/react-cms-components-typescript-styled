import React from 'react';

const FooterLinks = (props) => {
  // console.log(props.data);

  const renderedLinks = props.data.map((link) => {
    return (
      <li className="footer-nav__item" key={link.id}>
        <a href={link.link} className="">{link.title}</a>
      </li>
    );
  });

  return <ol className="footer-nav">{renderedLinks}</ol>;
};

export default FooterLinks;
