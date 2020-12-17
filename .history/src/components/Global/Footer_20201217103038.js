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
Sub 1
              </div>

            </div>

            <div class="footer__col footer__col--2">

              <h2>{{ blockData.col2Title }}</h2>
              <nav>
                <ol class="footer-nav">
                  <li class="footer-nav__item" v-for="item in blockData.col2Items" :key="item.id">
                    <router-link :to="item.link" class="footer-nav__link">{{item.title}}</router-link>
                  </li>
                </ol>
              </nav>

            </div>

            <div class="footer__col footer__col--3">

              <h2>{{ blockData.col3Title }}</h2>
              <nav>
                <ol class="footer-nav">
                  <li class="footer-nav__item" v-for="item in blockData.col3Items" :key="item.id">
                    <router-link :to="item.link" class="footer-nav__link">{{item.title}}</router-link>
                  </li>
                </ol>
              </nav>

            </div>

            <div class="footer__col footer__col--4">

              <h2>{{ blockData.col4Title }}</h2>
              <nav>
                <ol class="footer-nav">
                  <li class="footer-nav__item" v-for="item in blockData.col4Items" :key="item.id">
                    <router-link :to="item.link" class="footer-nav__link">{{item.title}}</router-link>
                  </li>
                </ol>
              </nav>

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
