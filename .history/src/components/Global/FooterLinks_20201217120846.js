import React from 'react';

const FooterLinks = (props) => {
  console.log(props);

  renderLinks() {
    return props.map((link, index) => {
      return (
        <li
          key={index}
        >
        test
        </li>
      );
    }); 
  };

  return <ul>{renderedLinks()}</ul>;
};

export default FooterLinks;
