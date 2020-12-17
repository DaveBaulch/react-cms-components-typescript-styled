import React from 'react';

const Footer = () => {
  return (
    <div class="footer-wrapper" v-if="blockData">

      <footer class="footer" id="footer" role="contentinfo">

        <div class="container">

          <div class="row">

            <div class="footer__col footer__col--1">

              <div class="footer__sub1">
 
                  Sub 1

              </div>

              <div class="footer__sub2">
              
                Sub 2

            </div>

            <div class="footer__col footer__col--2">

              Col 2

            </div>

            <div class="footer__col footer__col--3">

              Col 3

            </div>

            <div class="footer__col footer__col--4">

              Col 4
                
            </div>            

          </div>

          <div class="row">

            Social sharing

          </div>

        </div>

      
        <div class="container">

          <div class="row">

            <div class="copyright-notice-wrapper">
              <p class="copyright-notice" v-html="blockData.copyright"></p>
            </div>

            <div class="footer-links-wrapper">

              <ul class="footer-links">
                <li class="footer-links__item" v-for="item in blockData.footerItems" :key="item.id"><router-link :to="item.link" class="footer-links__link">{{ item.title }}</router-link></li>
              </ul>

            </div>

          </div>

        </div>      
      
      </footer>
  );
};

export default Footer;
