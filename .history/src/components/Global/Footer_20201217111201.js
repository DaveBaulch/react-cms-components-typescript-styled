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
          <div className="row">
            <div className="footer__col footer__col--1">
              <div className="footer__sub1">Sub 1</div>

              <div className="footer__sub2">Sub 2</div>
            </div>

            <div className="footer__col footer__col--2">Col 2</div>

            <div className="footer__col footer__col--3">Col 3</div>

            <div className="footer__col footer__col--4">Col 4</div>
          </div>

          <div className="row">Social sharing</div>
        </div>

        <div className="container">
          <div className="row">
            <div className="copyright-notice-wrapper">Copyright notice</div>

            <div className="footer-links-wrapper">Footer links</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
