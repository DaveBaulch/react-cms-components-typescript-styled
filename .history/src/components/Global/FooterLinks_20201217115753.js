import React from 'react';

const FooterLinks = (props) => {
  console.log(props);

  renderLinks() {
    return this.props.map((link) => {
      return (
        <ul
        <div className="item" key={song.title}>
          
        </div>
      );
    });
  }

  return <div>{this.renderLinks()}</div>;
};

export default FooterLinks;
