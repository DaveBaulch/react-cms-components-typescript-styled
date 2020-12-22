import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import FooterLinks from './Links';
import FooterNavLinks from './NavLinks';
import SocialSharing from '../SocialSharing';
import './Footer.scss';

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

  const getData = async () => {
    const { data } = await axios.get('data/footer-data.json');
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const {
    length,
    col1Title1,
    col1Phone,
    col1EmailAddress,
    col1EmailText,
    col1Title2,
    col1Address,
    col2Title,
    col2Items,
    col2Items
    col3Items,
    socialLinks,
    copyright,
    footerItems
  } = data;

  return (
    <div className="footer-wrapper">
      {!(data.length === 0) && (
        <footer className="footer" id="footer" role="contentinfo">
          <div className="container">
            <div className="row">
              <div className="footer__col footer__col--1">
                <div className="footer__sub1">
                  <h2>{col1Title1}</h2>

                  <nav aria-label="Contact items">
                    <ul className="footer-nav">
                      <li className="footer-nav__item">
                        <img
                          src="images/svg/icon-phone.svg"
                          className="footer-nav__item-icon"
                          alt=""
                        />
                        <a
                          href={`tel:${col1Phone}`}
                          className="footer-nav__link"
                        >
                          {col1Phone}
                        </a>
                      </li>

                      <li className="footer-nav__item">
                        <img
                          src="images/svg/icon-mail.svg"
                          className="footer-nav__item-icon"
                          alt=""
                        />
                        <a
                          href={`mailto:${col1EmailAddress}`}
                          className="footer-nav__link"
                        >
                          {col1EmailText}
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>

                <div className="footer__sub2">
                  <h3>{col1Title2}</h3>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: col1Address
                    }}
                  ></div>
                </div>
              </div>

              <div className="footer__col footer__col--2">
                <h2>{col2Title}</h2>
                <FooterNavLinks data={col2Items} />
              </div>

              <div className="footer__col footer__col--3">
                <h2>{col3Title}</h2>
                <FooterNavLinks data={dcol3Items} />
              </div>

              <div className="footer__col footer__col--4">
                <h2>{col4Title}</h2>
                <FooterNavLinks data={col3Items} />
              </div>
            </div>

            <div className="row">
              <SocialSharing data={socialLinks} />
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div
                className="copyright-notice-wrapper"
                dangerouslySetInnerHTML={{
                  __html: copyright
                }}
              ></div>

              <div className="footer-links-wrapper">
                <FooterLinks data={footerItems} />
              </div>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
};

export default Footer;
