import React from 'react';

const FooterLinks = (props) => {
  console.log(props);

  renderLinks() {
    return props.map((link) => {
      return ( 
          <li>test</li>
      );
    });
  }

  return <div>{this.renderLinks()}</div>;
};

export default FooterLinks;
