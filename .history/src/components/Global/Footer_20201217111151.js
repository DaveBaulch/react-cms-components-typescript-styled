import React from 'react';
import { useState, useEffect } from 'react';
const Footer = () => {
  const [data, setData] = useState([]);

  // runs on first load
  const getData = () => {
    fetch('data/footer-data.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setData(myJson);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div clasName="footer-wrapper">
      {data}
      <footer className="footer" id="footer" role="contentinfo">
        <div className="container">
          <div clasName="row">
            <div className="footer__col footer__col--1">
              <div clasName="footer__sub1">Sub 1</div>

              <div clasName="footer__sub2">Sub 2</div>
            </div>

            <div clasName="footer__col footer__col--2">Col 2</div>

            <div clasName="footer__col footer__col--3">Col 3</div>

            <div clasName="footer__col footer__col--4">Col 4</div>
          </div>

          <div clasName="row">Social sharing</div>
        </div>

        <div clasName="container">
          <div clasName="row">
            <div clasName="copyright-notice-wrapper">Copyright notice</div>

            <div clasName="footer-links-wrapper">Footer links</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
