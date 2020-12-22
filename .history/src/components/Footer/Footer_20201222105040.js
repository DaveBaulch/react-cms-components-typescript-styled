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
    const {
      data: {
        length,
        col1Title1,
        col1Phone,
        col1EmailAddress,
        col1EmailText,
        col1Title2,
        col1Address,
        col2Title,
        col2Items,
      }
    } = await axios.get('data/footer-data.json');
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="footer-wrapper">
      {!(data.length === 0) && (
        <footer className="footer" id="footer" role="contentinfo">
          <div className="container">
            <div className="row">
              <div className="footer__col footer__col--1">
                <div className="footer__sub1">
                  <h2>{data.col1Title1}</h2>

                  <nav aria-label="Contact items">
                    <ul className="footer-nav">
                      <li className="footer-nav__item">
                        <img
                          src="images/svg/icon-phone.svg"
                          className="footer-nav__item-icon"
                          alt=""
                        />
                        <a
                          href={`tel:${data.col1Phone}`}
                          className="footer-nav__link"
                        >
                          {data.col1Phone}
                        </a>
                      </li>

                      <li className="footer-nav__item">
                        <img
                          src="images/svg/icon-mail.svg"
                          className="footer-nav__item-icon"
                          alt=""
                        />
                        <a
                          href={`mailto:${data.col1EmailAddress}`}
                          className="footer-nav__link"
                        >
                          {data.col1EmailText}
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>

                <div className="footer__sub2">
                  <h3>{data.col1Title2}</h3>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: data.col1Address
                    }}
                  ></div>
                </div>
              </div>

              <div className="footer__col footer__col--2">
                <h2>{data.col2Title}</h2>
                <FooterNavLinks data={data.col2Items} />
              </div>

              <div className="footer__col footer__col--3">
                <h2>{data.col3Title}</h2>
                <FooterNavLinks data={data.col3Items} />
              </div>

              <div className="footer__col footer__col--4">
                <h2>{data.col4Title}</h2>
                <FooterNavLinks data={data.col3Items} />
              </div>
            </div>

            <div className="row">
              <SocialSharing data={data.socialLinks} />
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div
                className="copyright-notice-wrapper"
                dangerouslySetInnerHTML={{
                  __html: data.copyright
                }}
              ></div>

              <div className="footer-links-wrapper">
                <FooterLinks data={data.footerItems} />
              </div>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
};

export default Footer;
