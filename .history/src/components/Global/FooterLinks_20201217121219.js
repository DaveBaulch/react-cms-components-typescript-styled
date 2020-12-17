import React from 'react';

const FooterLinks = ({footerItems}) => {
  console.log(props);

  renderedLinks() {
    return props.map((link) => {
      return (
        <li
          key={index}
        >
        test
        </li>
      );
    });
  };

  return <ul>links</ul>;
};

export default FooterLinks;
