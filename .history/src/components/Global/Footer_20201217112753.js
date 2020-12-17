import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Footer = () => {
  const [data, setData] = useState([]);

  // const getData = () => {
  //   fetch('data/footer-data.json', {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Accept: 'application/json'
  //     }
  //   })
  //     .then(function (response) {
  //       console.log(response);
  //       return response.json();
  //     })
  //     .then(function (myJson) {
  //       console.log(myJson);
  //       setData(myJson);
  //     });
  // };
const search = async () => {
  const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
    params: {
      action: 'query',
      list: 'search',
      origin: '*',
      format: 'json',
      srsearch: debouncedTerm
    }
  });
  setResults(data.query.search);
};


  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="footer-wrapper">
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
