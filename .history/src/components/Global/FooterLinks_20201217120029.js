import React from 'react';

const FooterLinks = (props) => {
  console.log(props);

  renderLinks() {
    <ul></ul>
    return this.props.map((link) => {
      return ( 
          <li>test</li>
      );
    });
    </ul>
  }

  return <div>{this.renderLinks()}</div>;
};

export default FooterLinks;
