import { React, useState, useEffct } from 'react';

const Footer = () => {
  const [data, setData] = 

  return (
    <div class="footer-wrapper">
      <footer class="footer" id="footer" role="contentinfo">
        <div class="container">
          <div class="row">
            <div class="footer__col footer__col--1">
              <div class="footer__sub1">Sub 1</div>

              <div class="footer__sub2">Sub 2</div>
            </div>

            <div class="footer__col footer__col--2">Col 2</div>

            <div class="footer__col footer__col--3">Col 3</div>

            <div class="footer__col footer__col--4">Col 4</div>
          </div>

          <div class="row">Social sharing</div>
        </div>

        <div class="container">
          <div class="row">
            <div class="copyright-notice-wrapper">Copyright notice</div>

            <div class="footer-links-wrapper">Footer links</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
