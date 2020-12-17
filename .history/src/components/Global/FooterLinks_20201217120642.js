import React from 'react';

const FooterLinks = ({ links }) => {
  console.log(links);

  renderLinks() {
   return this.state.selectedForceSearches.map((search, index) => {
      return (
        <li
          key={index}
          className="ui segment search-item"
          style={{ listStyle: 'none' }}
        >
          Gender: {search.gender}, <br />
          Age range: {search.age_range}, <br />
          Search type: {search.object_of_search}
        </li>
      );
    }); 
  } 
  return <ul>{renderLinks()}</ul>;
};

export default FooterLinks;
